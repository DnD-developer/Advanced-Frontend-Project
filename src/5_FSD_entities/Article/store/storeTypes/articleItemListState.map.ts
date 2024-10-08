import type { EntityState } from "@reduxjs/toolkit"
import type { articleDetailsDataType } from "../../types/articleDetailsData.type"
import type { articleItemStateMap } from "./articleItemState.map"

export type articleItemListStateMap = Omit<articleItemStateMap, "article"> &
	EntityState<articleDetailsDataType, string>
