import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"

export const [useGetScrollPositionSelector, getScrollPositionSelector] = buildSelector(
	(state: mainStateMap) => state.scrollPosition
)
