import { createSelector } from "@reduxjs/toolkit"
import { addArticleCommentStateMap } from "../../storeTypes/addArticleCommentState.map"
import { getAddArticleCommentSelector } from "../getAddArticleComment/getAddArticleComment.selector"

export const getAddArticleCommentIsLoadingSelector = createSelector(
	getAddArticleCommentSelector,
	(state?: addArticleCommentStateMap) => state?.isLoading || false
)
