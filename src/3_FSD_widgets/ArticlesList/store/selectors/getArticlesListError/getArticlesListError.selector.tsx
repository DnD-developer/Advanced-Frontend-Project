import { createSelector } from "@reduxjs/toolkit"
import type { articlesListStateMap } from "../../storeTypes/articlesListState.map"
import { getArticlesListSelector } from "../getArticlesList/getArticlesList.selector"

export const getArticlesListErrorSelector = createSelector(
	getArticlesListSelector,
	(state?: articlesListStateMap) => state?.error || undefined
)
