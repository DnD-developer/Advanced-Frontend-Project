import { articleDetailsStateMap } from "@entities/Article"
import { addArticleCommentStateMap } from "@features/AddArticleComment"
import { loginFormStateMap } from "@features/AuthByUserName"
import { editableProfileStateMap } from "@features/EditableProfileCard"
import { articlesListStateMap } from "@widgets/ArticlesList"
import { commentsArticleDetailsMap } from "@widgets/CommentsArticleDetails"

export type mainStateAsyncMap = {
	editableProfileCard?: editableProfileStateMap
	loginForm?: loginFormStateMap
	articleDetails?: articleDetailsStateMap
	commentsArticleDetails?: commentsArticleDetailsMap
	addArticleComment?: addArticleCommentStateMap
	articlesListStateMap?: articlesListStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
