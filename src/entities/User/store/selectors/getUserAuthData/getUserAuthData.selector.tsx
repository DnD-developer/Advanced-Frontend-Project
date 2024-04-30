import { createSelector } from "@reduxjs/toolkit"
import { userStateMap } from "../../storeTypes/userState.map"
import { getUserSelector } from "../getUser/getUser.selector"

export const getUserAuthDataSelector = createSelector(
	getUserSelector,
	(state: userStateMap) => state.authData
)
