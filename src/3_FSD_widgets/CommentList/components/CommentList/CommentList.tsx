import { articleDataType } from "@entities/Article"
import { CommentCard } from "@entities/Comment"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { Text, TextAlign, TextTheme } from "@ui/Text"
import { memo, ReactNode, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getCommentListDataSelector } from "../../store/selectors/getCommentListData/getCommentListDataSelector"
import { getCommentListErrorSelector } from "../../store/selectors/getCommentListError/getCommentListError.selector"
import { getCommentListIsLoadingSelector } from "../../store/selectors/getCommentListIsLoading/getCommentListIsLoading.selector"
import { commentListReducer } from "../../store/slices/commentList.slice"
import { fetchCommentsByArticleIdThunk } from "../../store/thunks/fetchCommentsByArticleId.thunk"
import styles from "./CommentList.module.scss"

type CommentListProps = {
	articleId: articleDataType["id"]
	className?: string
}

const initialReducers: asyncReducersList = {
	commentList: commentListReducer
}

export const CommentList = memo<CommentListProps>(props => {
	const { className, articleId } = props

	const { t } = useTranslation("article")

	let commentElements: ReactNode

	useAsyncReducer(initialReducers)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchCommentsByArticleIdThunk(articleId))
		}
	}, [articleId, dispatch])

	const comments = useSelector(getCommentListDataSelector)
	const isLoading = useSelector(getCommentListIsLoadingSelector)
	const error = useSelector(getCommentListErrorSelector)

	if (comments.length) {
		commentElements = comments.map(comment => (
			<CommentCard
				className={styles.comment}
				key={comment.id}
				isLoading={isLoading}
				comment={comment}
			/>
		))
	}

	// if (isLoading) {
	// 	commentElements = (
	// 		<>
	// 			<CommentCard
	// 				isLoading={isLoading}
	// 				className={styles.comment}
	// 			/>
	// 			<CommentCard
	// 				isLoading={isLoading}
	// 				className={styles.comment}
	// 			/>
	// 			<CommentCard
	// 				isLoading={isLoading}
	// 				className={styles.comment}
	// 			/>
	// 		</>
	// 	)
	// }

	if (error) {
		commentElements = (
			<Text
				align={TextAlign.CENTER}
				title={t("article:errorWithRequestComments")}
				theme={TextTheme.ERROR}
			/>
		)
	}

	return (
		<div className={classNamesHelp(styles.CommentList, {}, [className])}>
			<Text title={t("article:listOfComments")} />
			<div className={styles.comments}>{commentElements}</div>
		</div>
	)
})
