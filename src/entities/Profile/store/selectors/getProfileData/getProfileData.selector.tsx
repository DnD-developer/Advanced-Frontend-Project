import { createSelector } from "@reduxjs/toolkit"
import { profileStateMap } from "../../storeTypes/profileState.map"
import { getProfileSelector } from "../getProfile/getProfile.selector"

export const getProfileDataSelector = createSelector(
	getProfileSelector,
	(state: profileStateMap) => state?.data
)
