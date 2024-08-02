import { articleDetailsDataType, ArticleItemViews } from "@entities/Article"
import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { articlesRecommendationState } from "../storeTypes/articlesRecommendationState.map"
import { fetchArticlesRecommendationThunk } from "../thunks/fetchArticlesRecommendation/fetchArticlesRecommendation.thunk"

const initialState: articlesRecommendationState = {
	isLoading: false,
	view: ArticleItemViews.PlATES,
	error: undefined,
	ids: [],
	entities: {}
}

export const articlesRecommendationAdapter = createEntityAdapter<articleDetailsDataType>()

const articlesRecommendationSlice = createSlice({
	name: "articlesRecommendation",
	initialState:
		articlesRecommendationAdapter.getInitialState<articlesRecommendationState>(initialState),
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchArticlesRecommendationThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(
				fetchArticlesRecommendationThunk.fulfilled,
				(state, action: PayloadAction<articleDetailsDataType[]>) => {
					state.isLoading = false
					state.error = undefined
					articlesRecommendationAdapter.setAll(state, action.payload)
				}
			)
			.addCase(fetchArticlesRecommendationThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: articlesRecommendationActions } = articlesRecommendationSlice
export const { reducer: articlesRecommendationReducer } = articlesRecommendationSlice
