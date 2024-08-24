import { createSelector } from "@reduxjs/toolkit"
import type { filterArticlesListStateMap } from "../../storeTypes/filterArticlesListState.map"
import { getFilterArticlesListSelector } from "../getFilterArticlesList/getFilterArticlesListSelector"

export const getFilterArticlesListSearchSelector = createSelector(
	getFilterArticlesListSelector,
	(state?: filterArticlesListStateMap) => state?.search ?? ""
)
