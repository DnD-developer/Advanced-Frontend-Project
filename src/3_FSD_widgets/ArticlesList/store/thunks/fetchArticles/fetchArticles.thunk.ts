import { articleDetailsDataType } from "@entities/Article"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articlesListStateMap } from "../../storeTypes/articlesListState.map"

export const fetchArticlesThunk = createAsyncThunk<
	articleDetailsDataType[],
	undefined,
	thunkConfigType<articlesListStateMap["error"]>
>("articlesList/fetchArticlesThunk", async (_, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get("/articles", {
			params: {
				_expand: "user"
			}
		})

		if (response.data.length) {
			return response.data
		}

		return rejectWithValue("no data")
	} catch {
		return rejectWithValue("error with request articles")
	}
})
