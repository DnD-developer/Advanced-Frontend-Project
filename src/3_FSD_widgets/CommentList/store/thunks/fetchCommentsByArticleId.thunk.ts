import { articleDataType } from "@entities/Article"
import { commentDataType } from "@entities/Comment"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { commentListStateMap } from "../storeTypes/commentListStateMap"

export const fetchCommentsByArticleIdThunk = createAsyncThunk<
	commentDataType[],
	articleDataType["id"],
	thunkConfigType<commentListStateMap["error"]>
>("comment/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		if (!articleId) {
			return rejectWithValue("no articleId")
		}

		const response = await extra.api.get<commentDataType[]>("/comments", {
			params: {
				articleId,
				_expand: "user"
			}
		})

		if (!response.data) {
			return rejectWithValue("no data")
		}

		return response.data
	} catch {
		return rejectWithValue("error with request")
	}
})
