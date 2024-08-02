import { createSelector } from "@reduxjs/toolkit"
import { articlesRecommendationState } from "../../storeTypes/articlesRecommendationState.map"
import { getArticlesRecommendationSelector } from "../getArticlesRecommendation/getArticlesRecommendation.selector"

export const getArticlesRecommendationErrorSelector = createSelector(
	getArticlesRecommendationSelector,
	(state?: articlesRecommendationState) => state?.error || ""
)
