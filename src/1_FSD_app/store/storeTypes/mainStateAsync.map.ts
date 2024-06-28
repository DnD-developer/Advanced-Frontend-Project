import { articleDetailsStateMap } from "@entities/Article"
import { loginFormStateMap } from "@features/AuthByUserName"
import { editableProfileStateMap } from "@features/EditableProfileCard"
import { commentListStateMap } from "@widgets/CommentList"

export type mainStateAsyncMap = {
	editableProfileCard?: editableProfileStateMap
	loginForm?: loginFormStateMap
	articleDetails?: articleDetailsStateMap
	commentList?: commentListStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
