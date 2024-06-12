import { createSelector } from "@reduxjs/toolkit"
import { loginFormStateMap } from "../../storeTypes/loginFormState.map"
import { getLoginFormSelector } from "../getLoginForm/getLoginForm.selector"

export const getLoginFormIsLoadingSelector = createSelector(
	getLoginFormSelector,
	(state?: loginFormStateMap) => state?.isLoading || false
)
