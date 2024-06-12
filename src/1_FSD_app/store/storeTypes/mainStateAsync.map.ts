import { articleDetailsStateMap } from "@entities/Article"
import { loginFormStateMap } from "@features/AuthByUserName"
import { editableProfileStateMap } from "@features/EditableProfileCard"

export type mainStateAsyncMap = {
	editableProfileCard?: editableProfileStateMap
	loginForm?: loginFormStateMap
	articleDetails?: articleDetailsStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
