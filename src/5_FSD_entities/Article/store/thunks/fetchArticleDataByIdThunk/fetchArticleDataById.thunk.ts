import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articleDataType } from "../../../types/ArticleData.type"
import { articleDetailsStateMap } from "../../storeTypes/articleDetailsState.map"

export const fetchArticleDataByIdThunk = createAsyncThunk<
	articleDataType,
	articleDataType["id"],
	thunkConfigType<articleDetailsStateMap["error"]>
>("/", async (id, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get<articleDataType>(`/articles/${id}`)

		return response.data
	} catch {
		return rejectWithValue("Error with Request")
	}
})
