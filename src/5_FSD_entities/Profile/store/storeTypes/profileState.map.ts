import { ServerErrors } from "../../constants/ServerErrors.constant"
import { ValidateErrorsConstant } from "../../constants/ValidateErrors.constant"
import { profileDataType } from "../../types/profileData.type"

export type profileStateMap = {
	data?: profileDataType
	isLoading: boolean
	errors?: (ServerErrors | ValidateErrorsConstant)[]
	readOnly: boolean
}
