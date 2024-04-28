import { mainStateMap } from "@app/store"

export const getCounterSelector = (state: mainStateMap) => state.counter
