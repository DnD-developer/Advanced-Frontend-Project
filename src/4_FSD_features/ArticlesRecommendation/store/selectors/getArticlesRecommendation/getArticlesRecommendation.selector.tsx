import { mainStateMap } from "@store/storeTypes/mainState.map"

export const getArticlesRecommendationSelector = (state: mainStateMap) =>
	state?.articlesRecommendation
