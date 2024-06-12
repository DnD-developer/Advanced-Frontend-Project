import { createSelector } from "@reduxjs/toolkit"
import { userStateMap } from "../../storeTypes/userState.map"
import { getUserSelector } from "../getUser/getUser.selector"

export const getUserInitAuthDataSelector = createSelector(
	getUserSelector,
	(state: userStateMap) => state?._initAuthData
)
