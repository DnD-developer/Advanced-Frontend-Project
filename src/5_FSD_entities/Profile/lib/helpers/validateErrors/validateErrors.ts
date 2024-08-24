import { ValidateErrorsConstant } from "../../../constants/ValidateErrors.constant"
import { profileCardDataType } from "../../../types/profileData.type"

export const validateErrors = (profile?: profileCardDataType) => {
	const errors: ValidateErrorsConstant[] = []

	if (!profile?.avatar) {
		errors.push(ValidateErrorsConstant.AVATAR_ERROR)
	}

	if (!profile?.userName) {
		errors.push(ValidateErrorsConstant.USERNAME_ERROR)
	}

	if (!profile?.firstName) {
		errors.push(ValidateErrorsConstant.FIRST_NAME)
	}

	if (!profile?.lastName) {
		errors.push(ValidateErrorsConstant.LAST_NAME)
	}

	if (!profile?.age || !Number.isInteger(profile.age)) {
		errors.push(ValidateErrorsConstant.AGE_ERROR)
	}

	if (!profile?.city) {
		errors.push(ValidateErrorsConstant.CITY_ERROR)
	}

	return errors
}
