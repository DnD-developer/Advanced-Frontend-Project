import { createSelector } from "@reduxjs/toolkit"
import { counterStoreMap } from "../../storeTypes/counterStore.map"
import { getCounterSelector } from "../getCounter/getCounter.selector"

export const getCounterValueSelector = createSelector(
	getCounterSelector,
	(state: counterStoreMap) => state.value
)
