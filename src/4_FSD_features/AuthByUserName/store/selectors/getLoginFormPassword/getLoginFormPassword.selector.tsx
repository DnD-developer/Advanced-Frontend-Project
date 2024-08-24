import { createSelector } from "@reduxjs/toolkit"
import type { loginByUserNameDataType } from "../../../types/loginByUserNameData.type"
import { getLoginFormDataSelector } from "../getLoginFormData/getLoginFormData.selector"

export const getLoginFormPasswordSelector = createSelector(
	getLoginFormDataSelector,
	(state?: loginByUserNameDataType) => state?.password || ""
)
