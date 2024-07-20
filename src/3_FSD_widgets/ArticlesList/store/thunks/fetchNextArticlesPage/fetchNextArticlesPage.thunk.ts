import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getArticlesListHasMoreSelector } from "../../selectors/getArticlesListHasMore/getArticlesListHasMore.selector"
import { getArticlesListIsLoadingSelector } from "../../selectors/getArticlesListIsLoading/getArticlesListIsLoading.selector"
import { getArticlesListPageNumberSelector } from "../../selectors/getArticlesListPageNumber/getArticlesListPageNumber.selector"
import { articlesListActions } from "../../slices/articlesList.slice"
import { articlesListStateMap } from "../../storeTypes/articlesListState.map"
import { fetchArticlesThunk } from "../fetchArticles/fetchArticles.thunk"

export const fetchNextArticlesPageThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<articlesListStateMap["error"]>
>("articlesList/fetchNextArticlesPage", (_, thunkAPI) => {
	const { dispatch, rejectWithValue, getState } = thunkAPI
	try {
		const articlesIsLoading = getArticlesListIsLoadingSelector(getState())
		const hasMore = getArticlesListHasMoreSelector(getState())

		if (!articlesIsLoading && hasMore) {
			dispatch(articlesListActions.setPage())

			const page = getArticlesListPageNumberSelector(getState())

			dispatch(fetchArticlesThunk(page))
		}
	} catch {
		return rejectWithValue("error with request articles")
	}
})
