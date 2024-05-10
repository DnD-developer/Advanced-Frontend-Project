import { loginFormStateMap } from "@features/AuthByUserName"

export type mainStateAsyncMap = {
	loginForm?: loginFormStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
