import { ServerErrors, ValidateErrors } from "../../store/storeTypes/profileState.map"

export const mappingErrors = (errors?: (ValidateErrors | ServerErrors)[]) => {
	const validateErrors = {} as Record<ValidateErrors, boolean | undefined>
	const serverErrors = {} as Record<ServerErrors, boolean | undefined>

	if (errors) {
		errors.forEach(error => {
			if (Object.keys(ValidateErrors).includes(error)) {
				validateErrors[error as ValidateErrors] = true
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
