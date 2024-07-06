import { articleDetailsStateMap } from "@entities/Article"
import { loginFormStateMap } from "@features/AuthByUserName"
import { editableProfileStateMap } from "@features/EditableProfileCard"
import { commentsArticleDetailsMap } from "src/3_FSD_widgets/CommentsArticleDetails"
import { addArticleCommentStateMap } from "src/4_FSD_features/AddArticleComment"

export type mainStateAsyncMap = {
	editableProfileCard?: editableProfileStateMap
	loginForm?: loginFormStateMap
	articleDetails?: articleDetailsStateMap
	commentsArticleDetails?: commentsArticleDetailsMap
	addArticleComment?: addArticleCommentStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
