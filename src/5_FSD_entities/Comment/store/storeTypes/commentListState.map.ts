import type { EntityState } from "@reduxjs/toolkit"
import type { commentDataType } from "../../types/commentData.type"

export type commentListStateMap = {
	isLoading: boolean
	error?: string
} & EntityState<commentDataType, string>
