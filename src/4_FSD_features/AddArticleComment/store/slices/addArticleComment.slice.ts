import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { addArticleCommentStateMap } from "../storeTypes/addArticleCommentState.map"
import { addNewArticleCommentThunk } from "../thunks/addNewArticleCommentThunk/addNewArticleComment.thunk"

const initialState: addArticleCommentStateMap = { error: undefined, text: "", isLoading: false }

const addArticleCommentSlice = createSlice({
	name: "addArticleComment",
	initialState,
	reducers: {
		setText: (
			state: addArticleCommentStateMap,
			action: PayloadAction<addArticleCommentStateMap["text"]>
		) => {
			state.text = action.payload
			state.error = undefined
		}
	},
	extraReducers: builder => {
		builder
			.addCase(addNewArticleCommentThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(addNewArticleCommentThunk.fulfilled, state => {
				state.isLoading = false
				state.error = undefined
			})
			.addCase(addNewArticleCommentThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: addArticleCommentActions } = addArticleCommentSlice
export const { reducer: addArticleCommentReducer } = addArticleCommentSlice
