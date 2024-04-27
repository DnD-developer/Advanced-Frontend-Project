import { createSelector } from "@reduxjs/toolkit"
import { counterStoreMap } from "../../storeMaps/counterStore.map"
import { getCounterSelector } from "../getCounter/getCounter.selector"

export const getCounterValueSelector = createSelector(
	getCounterSelector,
	(state: counterStoreMap) => state.value
)
