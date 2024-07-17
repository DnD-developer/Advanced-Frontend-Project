import { LOCAL_STORAGE_VIEW_ARTICLES_KEY } from "@constants/localStorage.constant"
import { articleDetailsDataType, ArticleItemViews } from "@entities/Article"
import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { articlesListStateMap } from "../storeTypes/articlesListState.map"
import { fetchArticlesThunk } from "../thunks/fetchArticles/fetchArticles.thunk"

const initialState: articlesListStateMap = {
	isLoading: false,
	view: ArticleItemViews.PlATES,
	error: undefined,
	ids: [],
	entities: {}
}

export const articlesListAdapter = createEntityAdapter<articleDetailsDataType>()

const articlesListSlice = createSlice({
	name: "articlesList",
	initialState: articlesListAdapter.getInitialState<articlesListStateMap>(initialState),
	reducers: {
		setView: (
			state: articlesListStateMap,
			action: PayloadAction<articlesListStateMap["view"]>
		) => {
			state.view = action.payload
			localStorage.setItem(LOCAL_STORAGE_VIEW_ARTICLES_KEY, action.payload)
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchArticlesThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchArticlesThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined
				articlesListAdapter.addMany(state, action.payload)
			})
			.addCase(fetchArticlesThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: articlesListActions } = articlesListSlice
export const { reducer: articlesListReducer } = articlesListSlice
