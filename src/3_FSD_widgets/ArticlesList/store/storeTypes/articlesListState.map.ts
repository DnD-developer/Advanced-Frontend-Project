import { articleItemListStateMap } from "@entities/Article"

export type articlesListStateMap = {
	pageNumber: number
	limit: number
	hasMore: boolean
	_inited: boolean
} & articleItemListStateMap
