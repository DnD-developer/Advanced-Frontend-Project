import { articleDetailsDataType } from "@entities/Article"
import { CommentList } from "@entities/Comment"
import { AddArticleCommentForm } from "@features/AddArticleComment"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { Text, TextSize } from "@ui/Text"
import { memo, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getCommentsArticleDetailsDataSelector } from "../../store/selectors/getCommentsArticleDetailsData/getCommentsArticleDetailsDataSelector"
import { getCommentsArticleDetailsErrorSelector } from "../../store/selectors/getCommentsArticleDetailsError/getCommentsArticleDetailsError.selector"
import { getCommentsArticleDetailsIsLoadingSelector } from "../../store/selectors/getCommentsArticleDetailsIsLoading/getCommentsArticleDetailsIsLoading.selector"
import { commentsArticleDetailsReducer } from "../../store/slices/commentsArticleDetails.slice"
import { fetchCommentsByArticleIdThunk } from "../../store/thunks/fetchCommentsByArticleId.thunk"
import styles from "./CommentsArticleDetails.module.scss"

type CommentsArticleDetailsProps = {
	className?: string
	articleId: articleDetailsDataType["id"]
}

const initialReducer: asyncReducersList = {
	commentsArticleDetails: commentsArticleDetailsReducer
}

export const CommentsArticleDetails = memo<CommentsArticleDetailsProps>(props => {
	const { className, articleId } = props

	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	useAsyncReducer(initialReducer)

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchCommentsByArticleIdThunk(articleId))
		}
	}, [articleId, dispatch])

	const isLoading = useSelector(getCommentsArticleDetailsIsLoadingSelector)
	const error = useSelector(getCommentsArticleDetailsErrorSelector)
	const comments = useSelector(getCommentsArticleDetailsDataSelector)

	return (
		<div className={classNamesHelp(styles.CommentsArticleDetails, {}, [className])}>
			<Text
				className={styles.title}
				title={t("article:listOfComments")}
				size={TextSize.BIG}
			/>
			<div className={styles.form}>
				<AddArticleCommentForm id={articleId} />
			</div>

			<CommentList
				comments={comments}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	)
})
