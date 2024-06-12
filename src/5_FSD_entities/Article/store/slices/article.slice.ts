import { createSlice } from "@reduxjs/toolkit"
import { articleDetailsStateMap } from "../storeTypes/articleDetailsState.map"
import { fetchArticleDataByIdThunk } from "../thunks/fetchArticleDataByIdThunk/fetchArticleDataById.thunk"

const initialState: articleDetailsStateMap = {
	isLoading: false,
	data: undefined,
	error: ""
}

const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchArticleDataByIdThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchArticleDataByIdThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined
				state.data = action.payload
			})
			.addCase(fetchArticleDataByIdThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
