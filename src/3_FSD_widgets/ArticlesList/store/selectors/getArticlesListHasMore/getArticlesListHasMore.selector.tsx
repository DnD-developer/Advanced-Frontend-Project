import { createSelector } from "@reduxjs/toolkit"
import type { articlesListStateMap } from "../../storeTypes/articlesListState.map"
import { getArticlesListSelector } from "../getArticlesList/getArticlesList.selector"

export const getArticlesListHasMoreSelector = createSelector(
	getArticlesListSelector,
	(state?: articlesListStateMap) => (state?.hasMore === undefined ? true : state?.hasMore)
)
