import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getArticlesListHasMoreSelector } from "../../selectors/getArticlesListHasMore/getArticlesListHasMore.selector"
import { getArticlesListIsLoadingSelector } from "../../selectors/getArticlesListIsLoading/getArticlesListIsLoading.selector"
import { articlesListActions } from "../../slices/articlesList.slice"
import { fetchArticlesThunk } from "../fetchArticles/fetchArticles.thunk"

export const fetchNextArticlesPageThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<undefined>
>("articlesList/fetchNextArticlesPage", (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI
	const articlesIsLoading = getArticlesListIsLoadingSelector(getState())
	const hasMore = getArticlesListHasMoreSelector(getState())

	if (!articlesIsLoading && hasMore) {
		dispatch(articlesListActions.setPage())

		dispatch(fetchArticlesThunk({}))
	}

	return undefined
})
