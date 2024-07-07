import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articleDetailsDataType } from "../../../types/articleDetailsData.type"
import { articleDetailsStateMap } from "../../storeTypes/articleDetailsState.map"

export const fetchArticleDataByIdThunk = createAsyncThunk<
	articleDetailsDataType,
	articleDetailsDataType["id"],
	thunkConfigType<articleDetailsStateMap["error"]>
>("/", async (id, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get<articleDetailsDataType>(`/articles/${id}`, {
			params: {
				_expand: "user"
			}
		})

		return response.data
	} catch {
		return rejectWithValue("Error with Request")
	}
})
