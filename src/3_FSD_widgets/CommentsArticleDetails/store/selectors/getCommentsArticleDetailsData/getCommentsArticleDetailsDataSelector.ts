import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { commentsArticleDetailsAdapter } from "../../slices/commentsArticleDetails.slice"

const initialState = commentsArticleDetailsAdapter.getInitialState()

export const getCommentsArticleDetails = commentsArticleDetailsAdapter.getSelectors<mainStateMap>(
	state => state?.commentsArticleDetails || initialState
)

export const { selectAll: getCommentsArticleDetailsDataSelector } = getCommentsArticleDetails
