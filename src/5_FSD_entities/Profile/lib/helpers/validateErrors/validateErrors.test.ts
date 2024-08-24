import { Country } from "../../../../Country"
import { Currency } from "../../../../Currency"
import { ValidateErrorsConstant } from "../../../constants/ValidateErrors.constant"
import { validateErrors } from "./validateErrors"

describe("validateErrorsTest", () => {
	test("with errors", () => {
		const dataTest = {
			avatar: "",
			firstName: "",
			lastName: "",
			age: undefined,
			currency: Currency.EUR,
			country: Country.Belarus,
			city: "",
			userName: ""
		}

		const errors = validateErrors(dataTest)

		expect(errors).toEqual([
			ValidateErrorsConstant.AVATAR_ERROR,
			ValidateErrorsConstant.USERNAME_ERROR,
			ValidateErrorsConstant.FIRST_NAME,
			ValidateErrorsConstant.LAST_NAME,
			ValidateErrorsConstant.AGE_ERROR,
			ValidateErrorsConstant.CITY_ERROR
		])
	})

	test("with out errors", () => {
		const dataTest = {
			avatar: "https://i.pinimg.com/originals/0d/cb/1f/0dcb1f45db2d5a624e5da74b74f3ddb9.png",
			firstName: "Lucifer",
			lastName: "Morningstar",
			age: 25,
			currency: Currency.EUR,
			country: Country.Belarus,
			city: "Fryazino",
			userName: "Lucifer"
		}

		const errors = validateErrors(dataTest)

		expect(errors).toEqual([])
	})
})
