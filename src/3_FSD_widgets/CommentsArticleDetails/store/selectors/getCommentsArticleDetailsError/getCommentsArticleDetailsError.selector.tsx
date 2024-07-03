import { createSelector } from "@reduxjs/toolkit"
import { commentsArticleDetailsMap } from "../../storeTypes/commentsArticleDetails.map"
import { getCommentsArticleDetailsSelector } from "../getCommentsArticleDetails/getCommentsArticleDetails.selector"

export const getCommentsArticleDetailsErrorSelector = createSelector(
	getCommentsArticleDetailsSelector,
	(state?: commentsArticleDetailsMap) => state?.error || ""
)
