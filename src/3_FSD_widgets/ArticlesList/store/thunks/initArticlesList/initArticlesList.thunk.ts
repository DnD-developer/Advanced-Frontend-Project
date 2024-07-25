import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getArticlesListInitedSelector } from "../../selectors/getArticlesListInited/getArticlesListInited.selector"
import { getArticlesListPageNumberSelector } from "../../selectors/getArticlesListPageNumber/getArticlesListPageNumber.selector"
import { articlesListActions } from "../../slices/articlesList.slice"
import { fetchArticlesThunk } from "../fetchArticles/fetchArticles.thunk"

export const initArticlesListThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<undefined>
>("articlesList/initArticlesListThunk", (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI
	const inited = getArticlesListInitedSelector(getState())

	if (!inited) {
		const pageNumber = getArticlesListPageNumberSelector(getState())

		dispatch(articlesListActions.initState())
		dispatch(fetchArticlesThunk(pageNumber))
	}

	return undefined
})
