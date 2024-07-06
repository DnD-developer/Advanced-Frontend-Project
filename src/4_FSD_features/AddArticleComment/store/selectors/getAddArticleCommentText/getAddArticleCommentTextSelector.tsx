import { createSelector } from "@reduxjs/toolkit"
import { addArticleCommentStateMap } from "../../storeTypes/addArticleCommentState.map"
import { getAddArticleCommentSelector } from "../getAddArticleComment/getAddArticleComment.selector"

export const getAddArticleCommentTextSelector = createSelector(
	getAddArticleCommentSelector,
	(state?: addArticleCommentStateMap) => state?.text || ""
)
