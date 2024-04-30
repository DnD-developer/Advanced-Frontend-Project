import { userStateMap } from "@entities/User"
import { loginFormStateMap } from "@features/AuthByUserName"

export type mainStateMap = {
	user: userStateMap
	loginForm: loginFormStateMap
}
