import { createSelector } from "@reduxjs/toolkit"
import type { articleDetailsStateMap } from "../../storeTypes/articleDetailsState.map"
import { getArticleSelector } from "../getArticle/getArticleSelector"

export const getArticleIsLoadingSelector = createSelector(
	getArticleSelector,
	(state?: articleDetailsStateMap) => state?.isLoading || false
)
