import { createSelector } from "@reduxjs/toolkit"
import { ArticleSortFieldConstant } from "../../../constants/ArticleSortField.constant"
import type { filterArticlesListStateMap } from "../../storeTypes/filterArticlesListState.map"
import { getFilterArticlesListSelector } from "../getFilterArticlesList/getFilterArticlesListSelector"

export const getFilterArticlesListSortFieldSelector = createSelector(
	getFilterArticlesListSelector,
	(state?: filterArticlesListStateMap) => state?.sortField || ArticleSortFieldConstant.TITLE
)
