import { loginFormStateMap } from "@features/AuthByUserName"
import { profileStateMap } from "src/entities/Profile"

export type mainStateAsyncMap = {
	loginForm?: loginFormStateMap
	profile?: profileStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
