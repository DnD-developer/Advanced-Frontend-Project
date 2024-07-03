import { EntityState } from "@reduxjs/toolkit"
import { commentDataType } from "../../types/commentData.type"

export type commentListStateMap = {
	isLoading: boolean
	error?: string
} & EntityState<commentDataType, string>
