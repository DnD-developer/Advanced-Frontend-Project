import { EntityState } from "@reduxjs/toolkit"
import { articleDetailsDataType } from "../../types/articleDetailsData.type"
import { articleItemStateMap } from "./articleItemState.map"

export type articleItemListStateMap = Omit<articleItemStateMap, "article"> &
	EntityState<articleDetailsDataType, string>
