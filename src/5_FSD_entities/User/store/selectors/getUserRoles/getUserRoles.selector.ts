import { createSelector } from "@reduxjs/toolkit"
import { userStateMap } from "../../storeTypes/userState.map"
import { getUserSelector } from "../getUser/getUser.selector"

export const getUserRolesSelector = createSelector(
	getUserSelector,
	(state: userStateMap) => state?.authData?.roles
)
