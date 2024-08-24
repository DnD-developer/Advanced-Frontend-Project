import { createSelector } from "@reduxjs/toolkit"
import type { articleDetailsStateMap } from "../../storeTypes/articleDetailsState.map"
import { getArticleSelector } from "../getArticle/getArticleSelector"

export const getArticleDataSelector = createSelector(
	getArticleSelector,
	(state?: articleDetailsStateMap) => state?.data
)
