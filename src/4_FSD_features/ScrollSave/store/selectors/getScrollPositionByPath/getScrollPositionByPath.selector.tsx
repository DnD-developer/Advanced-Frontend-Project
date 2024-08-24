import { createSelector } from "@reduxjs/toolkit"
import type { scrollPositionState } from "../../../index"
import { getScrollPositionSelector } from "../getScrollPosition/getScrollPosition.selector"

export const getScrollPositionByPathSelector = (key: string) =>
	createSelector(
		getScrollPositionSelector,
		(state: scrollPositionState) => state.scroll[key] ?? 0
	)
