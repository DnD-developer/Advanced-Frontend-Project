import { articleDetailsDataType } from "@entities/Article"
import { commentDataType } from "@entities/Comment"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { commentsArticleDetailsMap } from "../storeTypes/commentsArticleDetails.map"

export const fetchCommentsByArticleIdThunk = createAsyncThunk<
	commentDataType[],
	articleDetailsDataType["id"],
	thunkConfigType<commentsArticleDetailsMap["error"]>
>("commentsArticleDetails/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
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
