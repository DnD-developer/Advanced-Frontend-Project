import { ServerErrors, ValidateErrors } from "../store/storeTypes/profileState.map"
import { validateErrors } from "./validateErrors"

export const mappingErrors = (errors?: (ValidateErrors | ServerErrors)[]) => {
	const errorsValidate = {} as Record<ValidateErrors, boolean | undefined>
	const errorsServer = {} as Record<ServerErrors, boolean | undefined>

	if (errors) {
		errors.forEach(error => {
			if (Object.keys(ValidateErrors).includes(error)) {
				errorsValidate[error as ValidateErrors] = true
			}

			if (Object.keys(ServerErrors).includes(error)) {
				errorsServer[error as ServerErrors] = true
			}
		})
	}

	return {
		errorsValidate,
		errorsServer,
		isServerErrors: Object.keys(errorsServer).length ? true : false,
		isValidateErrors: Object.keys(validateErrors).length ? true : false
	}
}
