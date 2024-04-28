import { createSelector } from "@reduxjs/toolkit"
import { CounterStoreMap } from "../../storeTypes/CounterStore.map"
import { getCounterSelector } from "../getCounter/getCounter.selector"

export const getCounterValueSelector = createSelector(
	getCounterSelector,
	(state: CounterStoreMap) => state.value
)
