import { sortOrder } from "@customTypes/productGlobal.types"
import { ArticleTypeConstant } from "@entities/Article/constants/Article.constant"
import { ArticleSortFieldConstant } from "../../constants/ArticleSortField.constant"

export type filterArticlesListStateMap = {
	order: sortOrder
	sortField: ArticleSortFieldConstant
	search: string
	typeTopic: ArticleTypeConstant | "ALL"
}
