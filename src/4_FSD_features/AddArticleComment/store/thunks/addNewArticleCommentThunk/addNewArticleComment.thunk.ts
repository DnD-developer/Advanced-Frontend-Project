import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { fetchCommentsByArticleIdThunk } from "@widgets/CommentsArticleDetails/store/thunks/fetchCommentsByArticleId.thunk"
import { commentBdDataType } from "../../../types/commentBdData.type"
import { addArticleCommentActions } from "../../slices/addArticleComment.slice"
import { addArticleCommentStateMap } from "../../storeTypes/addArticleCommentState.map"

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
	} finally {
		dispatch(addArticleCommentActions.setText(""))
	}
})
