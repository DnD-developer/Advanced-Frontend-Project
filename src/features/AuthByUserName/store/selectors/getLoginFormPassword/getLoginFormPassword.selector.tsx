import { createSelector } from "@reduxjs/toolkit"
import { loginByUserNameDataType } from "../../storeTypes/loginByUserNameData.type"
import { getLoginFormDataSelector } from "../getLoginFormData/getLoginFormData.selector"

export const getLoginFormPasswordSelector = createSelector(
	getLoginFormDataSelector,
	(state: loginByUserNameDataType) => state.password
)
