import { createSelector } from "@reduxjs/toolkit"
import { commentsArticleDetailsMap } from "../../storeTypes/commentsArticleDetails.map"
import { getCommentsArticleDetailsSelector } from "../getCommentsArticleDetails/getCommentsArticleDetails.selector"

export const getCommentsArticleDetailsIsLoadingSelector = createSelector(
	getCommentsArticleDetailsSelector,
	(state?: commentsArticleDetailsMap) => state?.isLoading || false
)
