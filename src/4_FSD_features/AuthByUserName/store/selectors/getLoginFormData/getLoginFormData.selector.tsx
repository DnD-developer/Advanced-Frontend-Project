import { createSelector } from "@reduxjs/toolkit"
import { loginFormStateMap } from "../../storeTypes/loginFormState.map"
import { getLoginFormSelector } from "../getLoginForm/getLoginForm.selector"

export const getLoginFormDataSelector = createSelector(
	getLoginFormSelector,
	(state?: loginFormStateMap) => state?.data
)
