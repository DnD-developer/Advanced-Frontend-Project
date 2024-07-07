import { articleDetailsDataType } from "../../types/articleDetailsData.type"

export type articleListItemStateMap = {
	isLoading: boolean
	article: articleDetailsDataType
	error?: string
}
