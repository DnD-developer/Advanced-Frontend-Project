import { createSelector } from "@reduxjs/toolkit"
import { articleDetailsStateMap } from "../../storeTypes/articleDetailsState.map"
import { getArticleSelector } from "../getArticle/getArticleSelector"

export const getArticleErrorSelector = createSelector(
	getArticleSelector,
	(state?: articleDetailsStateMap) => state?.error || ""
)
