import { createSelector } from "@reduxjs/toolkit"
import { commentListStateMap } from "../../storeTypes/commentListStateMap"
import { getCommentListSelector } from "../getCommentList/getCommentList.selector"

export const getCommentListIsLoadingSelector = createSelector(
	getCommentListSelector,
	(state?: commentListStateMap) => state?.isLoading || false
)
