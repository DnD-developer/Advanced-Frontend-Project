import { ServerErrors } from "../../../constants/ServerErrors.constant"
import { ValidateErrorsConstant } from "../../../constants/ValidateErrors.constant"
import { mappingErrors } from "./mappingErrors"

describe("mappingErrorsTest", () => {
	test("with all errors", () => {
		const errors = mappingErrors([
			ServerErrors.SERVER_NOT_FOUND,
			ValidateErrorsConstant.AGE_ERROR
		])

		expect(errors).toEqual({
			isValidateErrors: true,
			isServerErrors: true,
			validateErrors: { [ValidateErrorsConstant.AGE_ERROR]: true },
			serverErrors: { [ServerErrors.SERVER_NOT_FOUND]: true }
		})
	})

	test("with only validate errors", () => {
		const errors = mappingErrors([ValidateErrorsConstant.AGE_ERROR])

		expect(errors).toEqual({
			isValidateErrors: true,
			isServerErrors: false,
			validateErrors: { [ValidateErrorsConstant.AGE_ERROR]: true },
			serverErrors: {}
		})
	})

	test("with only server errors", () => {
		const errors = mappingErrors([ServerErrors.SERVER_NOT_FOUND])

		expect(errors).toEqual({
			isValidateErrors: false,
			isServerErrors: true,
			validateErrors: {},
			serverErrors: { [ServerErrors.SERVER_NOT_FOUND]: true }
		})
	})

	test("with out errors", () => {
		const errors = mappingErrors()

		expect(errors).toEqual({
			isValidateErrors: false,
			isServerErrors: false,
			validateErrors: {},
			serverErrors: {}
		})
	})
})
