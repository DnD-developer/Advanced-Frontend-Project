import { commentDataType } from "@entities/Comment"
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { commentsArticleDetailsMap } from "../storeTypes/commentsArticleDetails.map"
import { fetchCommentsByArticleIdThunk } from "../thunks/fetchCommentsByArticleId.thunk"

export const commentsArticleDetailsAdapter = createEntityAdapter<commentDataType>()

const commentsArticleDetailsSlice = createSlice({
	name: "commentsArticleDetails",
	initialState: commentsArticleDetailsAdapter.getInitialState<commentsArticleDetailsMap>({
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
				commentsArticleDetailsAdapter.setAll(state, action.payload)
			})
			.addCase(fetchCommentsByArticleIdThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: commentsArticleDetailsActions } = commentsArticleDetailsSlice
export const { reducer: commentsArticleDetailsReducer } = commentsArticleDetailsSlice
