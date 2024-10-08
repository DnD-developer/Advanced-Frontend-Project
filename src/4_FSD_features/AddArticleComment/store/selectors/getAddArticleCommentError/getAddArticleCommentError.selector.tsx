import { createSelector } from "@reduxjs/toolkit"
import type { addArticleCommentStateMap } from "../../storeTypes/addArticleCommentState.map"
import { getAddArticleCommentSelector } from "../getAddArticleComment/getAddArticleComment.selector"

export const getAddArticleCommentErrorSelector = createSelector(
	getAddArticleCommentSelector,
	(state?: addArticleCommentStateMap) => state?.error
)
