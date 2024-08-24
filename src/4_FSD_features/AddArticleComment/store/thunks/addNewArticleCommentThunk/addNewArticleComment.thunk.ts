import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { fetchCommentsByArticleIdThunk } from "@widgets/CommentsArticleDetails/store/thunks/fetchCommentsByArticleId.thunk"
import type { commentBdDataType } from "../../../types/commentBdData.type"
import type { addArticleCommentStateMap } from "../../storeTypes/addArticleCommentState.map"

export const addNewArticleCommentThunk = createAsyncThunk<
	commentBdDataType,
	commentBdDataType,
	thunkConfigType<addArticleCommentStateMap["error"]>
>("addArticleComment/addNewArticleComment", async (body, thunkAPI) => {
	const { dispatch, extra, rejectWithValue } = thunkAPI

	try {
		const response = await extra.api.post<commentBdDataType>("/comments", body)

		dispatch(fetchCommentsByArticleIdThunk(body.articleId))

		return response.data
	} catch {
		return rejectWithValue("error with post comment")
	}
})
