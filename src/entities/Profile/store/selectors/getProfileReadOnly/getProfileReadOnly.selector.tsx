import { createSelector } from "@reduxjs/toolkit"
import { profileStateMap } from "../../storeTypes/profileState.map"
import { getProfileSelector } from "../getProfile/getProfile.selector"

export const getProfileReadOnlySelector = createSelector(
	getProfileSelector,
	(state?: profileStateMap) => state?.readOnly
)
