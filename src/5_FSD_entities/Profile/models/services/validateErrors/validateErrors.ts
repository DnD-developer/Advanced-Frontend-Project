import { profileDataType } from "../../store/storeTypes/profileData.type"
import { ValidateErrors } from "../../store/storeTypes/profileState.map"

export const validateErrors = (profile?: profileDataType) => {
	const errors: ValidateErrors[] = []

	if (!profile?.avatar) {
		errors.push(ValidateErrors.AVATAR_ERROR)
	}

	if (!profile?.userName) {
		errors.push(ValidateErrors.USERNAME_ERROR)
	}

	if (!profile?.firstName) {
		errors.push(ValidateErrors.FIRST_NAME)
	}

	if (!profile?.lastName) {
		errors.push(ValidateErrors.LAST_NAME)
	}

	if (!profile?.age || !Number.isInteger(profile.age)) {
		errors.push(ValidateErrors.AGE_ERROR)
	}

	if (!profile?.city) {
		errors.push(ValidateErrors.CITY_ERROR)
	}

	return errors
}
