import { createSelector } from "@reduxjs/toolkit"
import { loginByUserNameDataType } from "../../../types/loginByUserNameData.type"
import { getLoginFormDataSelector } from "../getLoginFormData/getLoginFormData.selector"

export const getLoginFormPasswordSelector = createSelector(
	getLoginFormDataSelector,
	(state?: loginByUserNameDataType) => state?.password || ""
)
