import { articleDetailsDataType, CountArticleItemOfView } from "@entities/Article"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articlesRecommendationState } from "../../storeTypes/articlesRecommendationState.map"

export const fetchArticlesRecommendationThunk = createAsyncThunk<
	articleDetailsDataType[],
	undefined,
	thunkConfigType<articlesRecommendationState["error"]>
>("articlesRecommendation/fetchArticlesRecommendation", async (_, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get("/articles", {
			params: {
				_limit: CountArticleItemOfView.DETAILED,
				_expand: "user"
			}
		})

		return response.data
	} catch {
		return rejectWithValue("error with request recommendation")
	}
})
