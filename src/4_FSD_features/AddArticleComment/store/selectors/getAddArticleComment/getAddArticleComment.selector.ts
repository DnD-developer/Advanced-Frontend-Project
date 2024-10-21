import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"

export const [useGetAddArticleCommentSelector, getAddArticleCommentSelector] = buildSelector(
	(state: mainStateMap) => state.addArticleComment
)
