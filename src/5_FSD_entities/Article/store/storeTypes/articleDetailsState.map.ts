import { articleDataType } from "../../types/articleData.type"

export type articleDetailsStateMap = {
	isLoading: boolean
	error?: string
	data?: articleDataType
}
