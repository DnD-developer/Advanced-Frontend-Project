import { articleDetailsDataType } from "../../types/articleDetailsData.type"
import { articleListItemStateMap } from "./articleListItemState.map"

export type articleListStateMap = {
	articles: articleDetailsDataType[]
} & Omit<articleListItemStateMap, "article">
