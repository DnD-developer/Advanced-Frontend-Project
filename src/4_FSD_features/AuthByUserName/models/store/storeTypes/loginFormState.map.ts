import { loginByUserNameDataType } from "./loginByUserNameData.type"
import { loginByUserNameError } from "./loginByUserNameError.type"

export type loginFormStateMap = {
	data: loginByUserNameDataType
	isLoading: boolean
	error?: loginByUserNameError
}
