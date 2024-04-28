import { createSelector } from "@reduxjs/toolkit"
import { counterStateMap } from "../../storeTypes/counterState.map"
import { getCounterSelector } from "../getCounter/getCounter.selector"

export const getCounterValueSelector = createSelector(
	getCounterSelector,
	(state: counterStateMap) => state.value
)
