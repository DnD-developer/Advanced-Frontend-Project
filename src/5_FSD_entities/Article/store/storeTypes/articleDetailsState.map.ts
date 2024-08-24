import type { articleDetailsDataType } from "../../types/articleDetailsData.type"

export type articleDetailsStateMap = {
	isLoading: boolean
	error?: string
	data?: articleDetailsDataType
}
