import { type mainStateMap } from "@store/storeTypes/mainState.map"

export const getUserSelector = (state: mainStateMap) => state.user
