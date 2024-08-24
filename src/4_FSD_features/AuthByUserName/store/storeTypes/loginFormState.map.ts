import type { loginByUserNameDataType } from "../../types/loginByUserNameData.type"
import type { loginByUserNameError } from "../../types/loginByUserNameError.type"

export type loginFormStateMap = {
	data: loginByUserNameDataType
	isLoading: boolean
	error?: loginByUserNameError
}
