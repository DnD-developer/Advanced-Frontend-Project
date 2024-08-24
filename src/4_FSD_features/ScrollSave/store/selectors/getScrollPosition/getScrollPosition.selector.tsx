import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const getScrollPositionSelector = (state: mainStateMap) => state.scrollPosition
