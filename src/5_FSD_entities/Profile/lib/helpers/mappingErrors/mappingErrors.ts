import { ServerErrors } from "../../../constants/ServerErrors.constant"
import { ValidateErrorsConstant } from "../../../constants/ValidateErrors.constant"

export const mappingErrors = (errors?: (ValidateErrorsConstant | ServerErrors)[]) => {
	const validateErrors = {} as Record<ValidateErrorsConstant, boolean | undefined>
	const serverErrors = {} as Record<ServerErrors, boolean | undefined>

	if (errors) {
		errors.forEach(error => {
			if (Object.keys(ValidateErrorsConstant).includes(error)) {
				validateErrors[error as ValidateErrorsConstant] = true
			}

			if (Object.keys(ServerErrors).includes(error)) {
				serverErrors[error as ServerErrors] = true
			}
		})
	}

	return {
		validateErrors,
		serverErrors,
		isServerErrors: Object.keys(serverErrors).length ? true : false,
		isValidateErrors: Object.keys(validateErrors).length ? true : false
	}
}
