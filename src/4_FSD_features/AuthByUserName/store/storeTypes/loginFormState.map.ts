import { loginByUserNameDataType } from "../../types/loginByUserNameData.type"
import { loginByUserNameError } from "../../types/loginByUserNameError.type"

export type loginFormStateMap = {
	data: loginByUserNameDataType
	isLoading: boolean
	error?: loginByUserNameError
}
