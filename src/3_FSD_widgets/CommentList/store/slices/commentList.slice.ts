import { commentDataType } from "@entities/Comment"
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { commentListStateMap } from "../storeTypes/commentListStateMap"
import { fetchCommentsByArticleIdThunk } from "../thunks/fetchCommentsByArticleId.thunk"

export const commentListAdapter = createEntityAdapter<commentDataType>()

const commentListSlice = createSlice({
	name: "commentList",
	initialState: commentListAdapter.getInitialState<commentListStateMap>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {}
	}),
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCommentsByArticleIdThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchCommentsByArticleIdThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined
				commentListAdapter.setAll(state, action.payload)
			})
			.addCase(fetchCommentsByArticleIdThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: commentListActions } = commentListSlice
export const { reducer: commentListReducer } = commentListSlice
