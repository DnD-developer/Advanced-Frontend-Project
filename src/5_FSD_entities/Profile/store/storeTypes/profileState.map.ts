import type { ServerErrors } from "../../constants/ServerErrors.constant"
import type { ValidateErrorsConstant } from "../../constants/ValidateErrors.constant"
import type { profileDataType } from "../../types/profileData.type"

export type profileStateMap = {
	data?: profileDataType
	isLoading: boolean
	errors?: (ServerErrors | ValidateErrorsConstant)[]
	readOnly: boolean
}
