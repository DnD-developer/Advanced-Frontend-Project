import type { scrollPositionState } from "../../../index"
import { getScrollPositionSelector } from "../getScrollPosition/getScrollPosition.selector"
import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"

export const getScrollPositionByPathSelector = (key: string) => {
	const { generalSelector } = buildCreateSelector(
		[getScrollPositionSelector],
		(state: scrollPositionState) => state.scroll[key] ?? 0
	)

	return generalSelector
}

export const useGetScrollPositionByPathSelector = (key: string) => {
	const { useAppCreateSelector } = buildCreateSelector(
		[getScrollPositionSelector],
		(state: scrollPositionState) => state.scroll[key] ?? 0
	)

	return useAppCreateSelector
}
