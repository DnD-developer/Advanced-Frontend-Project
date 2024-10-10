import type { articleDetailsDataType } from "@entities/Article"
import { AddCommentForm } from "@entities/Comment"
import { useAuth } from "@entities/User"
import type { commentBdDataType } from "@features/AddArticleComment/types/commentBdData.type"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import type { asyncReducersList } from "@hooks/useAsyncReducer.hook"
import { useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { memo, useCallback, useMemo } from "react"
import {
	addArticleCommentActions,
	addArticleCommentReducer
} from "../../store/slices/addArticleComment.slice"
import { addNewArticleCommentThunk } from "../../store/thunks/addNewArticleCommentThunk/addNewArticleComment.thunk"
import { useGetAddArticleCommentIsLoadingSelector } from "../../store/selectors/getAddArticleCommentIsLoading/getAddArticleCommentIsLoading.selector"
import { useGetAddArticleCommentTextSelector } from "../../store/selectors/getAddArticleCommentText/getAddArticleCommentTextSelector"
import { useGetAddArticleCommentErrorSelector } from "../../store/selectors/getAddArticleCommentError/getAddArticleCommentError.selector"

type AddArticleCommentFormProps = {
	className?: string
	id: articleDetailsDataType["id"]
}

const initReducer: asyncReducersList = {
	addArticleComment: addArticleCommentReducer
}

export const AddArticleCommentForm = memo<AddArticleCommentFormProps>(props => {
	const { className, id } = props

	const dispatch = useAppDispatch()

	useAsyncReducer(initReducer)

	const onSetTextHandler = useCallback(
		(text: string) => {
			dispatch(addArticleCommentActions.setText(text))
		},
		[dispatch]
	)

	const isLoading = useGetAddArticleCommentIsLoadingSelector()
	const error = useGetAddArticleCommentErrorSelector()
	const text = useGetAddArticleCommentTextSelector()

	const { isAuth, authData } = useAuth()

	const body: commentBdDataType = useMemo(() => {
		return {
			text,
			id: `${text}${authData?.userName}${id}`,
			articleId: id,
			userId: authData?.id || ""
		}
	}, [authData?.id, authData?.userName, id, text])

	const onSendHandler = useCallback(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(addNewArticleCommentThunk(body))
		}
	}, [body, dispatch])

	if (isAuth) {
		return (
			<AddCommentForm
				className={className}
				onSendHandler={onSendHandler}
				onSetTextHandler={onSetTextHandler}
				isLoading={isLoading}
				text={text}
				error={error}
			/>
		)
	}

	return null
})
