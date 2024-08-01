import { createSelector } from "@reduxjs/toolkit"
import { filterArticlesListStateMap } from "../../storeTypes/filterArticlesListState.map"
import { getFilterArticlesListSelector } from "../getFilterArticlesList/getFilterArticlesListSelector"

export const getFilterArticlesListSearchSelector = createSelector(
	getFilterArticlesListSelector,
	(state?: filterArticlesListStateMap) => state?.search ?? ""
)
