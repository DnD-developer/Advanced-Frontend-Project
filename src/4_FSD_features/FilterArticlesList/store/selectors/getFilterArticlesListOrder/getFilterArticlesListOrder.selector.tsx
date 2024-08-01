import { createSelector } from "@reduxjs/toolkit"
import { filterArticlesListStateMap } from "../../storeTypes/filterArticlesListState.map"
import { getFilterArticlesListSelector } from "../getFilterArticlesList/getFilterArticlesListSelector"

export const getFilterArticlesListOrderSelector = createSelector(
	getFilterArticlesListSelector,
	(state?: filterArticlesListStateMap) => state?.order || "ASC"
)
