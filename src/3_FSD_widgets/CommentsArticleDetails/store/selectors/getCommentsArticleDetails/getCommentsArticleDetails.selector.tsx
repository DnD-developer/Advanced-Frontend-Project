import { mainStateMap } from "@store/storeTypes/mainState.map"

export const getCommentsArticleDetailsSelector = (state: mainStateMap) =>
	state?.commentsArticleDetails
