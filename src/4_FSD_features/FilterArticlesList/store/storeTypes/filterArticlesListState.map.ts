import type { sortOrder } from "@customTypes/productGlobal.types"
import type { ArticleTypeConstant } from "@entities/Article/constants/Article.constant"
import type { ArticleSortFieldConstant } from "../../constants/ArticleSortField.constant"

export type filterArticlesListStateMap = {
	order: sortOrder
	sortField: ArticleSortFieldConstant
	search: string
	typeTopic: ArticleTypeConstant | "ALL"
}
