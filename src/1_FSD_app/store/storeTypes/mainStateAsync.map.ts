import { loginFormStateMap } from "@features/AuthByUserName"
import { editableProfileStateMap } from "@features/EditableProfileCard"

export type mainStateAsyncMap = {
	editableProfileCard?: editableProfileStateMap
	loginForm?: loginFormStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
