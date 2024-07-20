import { articleDetailsDataType } from "@entities/Article"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getArticlesListLimitSelector } from "../../selectors/getArticlesListLimit/getArticlesListLimit.selector"
import { articlesListStateMap } from "../../storeTypes/articlesListState.map"

export const fetchArticlesThunk = createAsyncThunk<
	articleDetailsDataType[],
	articlesListStateMap["pageNumber"],
	thunkConfigType<articlesListStateMap["error"]>
>("articlesList/fetchArticlesThunk", async (pageNumber, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI

	const limit = getArticlesListLimitSelector(getState())

	try {
		const response = await extra.api.get("/articles", {
			params: {
				_page: pageNumber,
				_limit: limit,
				_expand: "user"
			}
		})

		return response.data
	} catch {
		return rejectWithValue("error with request articles")
	}
})
