import { articleDataType } from "../../types/ArticleData.type"

export type articleDetailsStateMap = {
	isLoading: boolean
	error?: string
	data?: articleDataType
}
