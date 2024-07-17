import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleDetailsDataType } from "../../types/articleDetailsData.type"

export type articleItemStateMap = {
	isLoading: boolean
	view: ArticleItemViews
	article: articleDetailsDataType
	error?: string
}
