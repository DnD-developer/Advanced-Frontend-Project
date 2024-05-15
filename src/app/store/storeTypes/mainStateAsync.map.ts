import { loginFormStateMap } from "@features/AuthByUserName"
import { profileStateMap } from "src/entities/Profile"

export type mainStateAsyncMap = {
	profile?: profileStateMap
	loginForm?: loginFormStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
