import { profileStateMap } from "@entities/Profile"
import { loginFormStateMap } from "@features/AuthByUserName"

export type mainStateAsyncMap = {
	loginForm?: loginFormStateMap
	profile?: profileStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
