import { createSelector } from "@reduxjs/toolkit"
import { articlesRecommendationState } from "../../storeTypes/articlesRecommendationState.map"
import { getArticlesRecommendationSelector } from "../getArticlesRecommendation/getArticlesRecommendation.selector"

export const getArticlesRecommendationIsLoadingSelector = createSelector(
	getArticlesRecommendationSelector,
	(state?: articlesRecommendationState) => state?.isLoading ?? false
)
