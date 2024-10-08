import type { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import type { articleDetailsDataType } from "../../types/articleDetailsData.type"

export type articleItemStateMap = {
	isLoading: boolean
	view: ArticleItemViews
	article: articleDetailsDataType
	error?: string
}
