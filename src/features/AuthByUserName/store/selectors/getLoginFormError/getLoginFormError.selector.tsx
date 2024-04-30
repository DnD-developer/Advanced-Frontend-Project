import { createSelector } from "@reduxjs/toolkit"
import { loginFormStateMap } from "../../storeTypes/loginFormState.map"
import { getLoginFormSelector } from "../getLoginForm/getLoginForm.selector"

export const getLoginFormErrorSelector = createSelector(
	getLoginFormSelector,
	(state: loginFormStateMap) => state.error
)
