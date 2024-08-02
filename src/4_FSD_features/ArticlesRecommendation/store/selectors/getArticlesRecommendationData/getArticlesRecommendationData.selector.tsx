import { mainStateMap } from "@store/storeTypes/mainState.map"
import { articlesRecommendationAdapter } from "../../slice/articlesRecommendation.slice"

const initialState = articlesRecommendationAdapter.getInitialState()

const getArticlesRecommendation = articlesRecommendationAdapter.getSelectors<mainStateMap>(
	state => state?.articlesRecommendation || initialState
)

export const { selectAll: getArticlesRecommendationDataSelector } = getArticlesRecommendation
