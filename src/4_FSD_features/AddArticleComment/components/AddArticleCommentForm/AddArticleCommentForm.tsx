import { articleDataType } from "@entities/Article"
import { AddCommentForm } from "@entities/Comment"
import { useAuth } from "@entities/User"
import { commentBdDataType } from "@features/AddArticleComment/types/commentBdData.type"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { memo, useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { getAddArticleCommentErrorSelector } from "../../store/selectors/getAddArticleCommentError/getAddArticleCommentError.selector"
import { getAddArticleCommentIsLoadingSelector } from "../../store/selectors/getAddArticleCommentIsLoading/getAddArticleCommentIsLoading.selector"
import { getAddArticleCommentTextSelector } from "../../store/selectors/getAddArticleCommentText/getAddArticleCommentTextSelector"
import {
	addArticleCommentActions,
	addArticleCommentReducer
} from "../../store/slices/addArticleComment.slice"
import { addNewArticleCommentThunk } from "../../store/thunks/addNewArticleCommentThunk/addNewArticleComment.thunk"

type AddArticleCommentFormProps = {
	className?: string
	id: articleDataType["id"]
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

	const isLoading = useSelector(getAddArticleCommentIsLoadingSelector)
	const error = useSelector(getAddArticleCommentErrorSelector)
	const text = useSelector(getAddArticleCommentTextSelector)
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
