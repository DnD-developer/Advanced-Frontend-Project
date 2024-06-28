import { commentDataType } from "@entities/Comment"
import { EntityState } from "@reduxjs/toolkit"

export type commentListStateMap = {
	isLoading: boolean
	error?: string
} & EntityState<commentDataType, string>
