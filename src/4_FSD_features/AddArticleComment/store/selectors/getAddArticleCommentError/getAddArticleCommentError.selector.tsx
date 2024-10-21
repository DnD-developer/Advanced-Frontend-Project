import type { addArticleCommentStateMap } from "../../storeTypes/addArticleCommentState.map"
import { getAddArticleCommentSelector } from "../getAddArticleComment/getAddArticleComment.selector"
import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"

export const [useGetAddArticleCommentErrorSelector, getAddArticleCommentErrorSelector] =
	buildCreateSelector(
		[getAddArticleCommentSelector],
		(state?: addArticleCommentStateMap) => state?.error
	)
