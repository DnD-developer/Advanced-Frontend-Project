import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign, TextTheme } from "@ui/Text"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { commentListStateMap } from "../../store/storeTypes/commentListState.map"
import { commentDataType } from "../../types/commentData.type"
import { CommentCard } from "../CommentCard/CommentCard"
import styles from "./CommentList.module.scss"

type CommentListProps = {
	comments: commentDataType[]
	isLoading: commentListStateMap["isLoading"]
	error: commentListStateMap["error"]
	className?: string
}

export const CommentList = memo<CommentListProps>(props => {
	const { className, comments, isLoading, error } = props

	const { t } = useTranslation()

	let commentElements: ReactNode

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

	if (isLoading) {
		commentElements = (
			<>
				<CommentCard
					isLoading={isLoading}
					className={styles.comment}
				/>
				<CommentCard
					isLoading={isLoading}
					className={styles.comment}
				/>
				<CommentCard
					isLoading={isLoading}
					className={styles.comment}
				/>
			</>
		)
	}

	if (error) {
		commentElements = (
			<Text
				align={TextAlign.CENTER}
				title={t("translation:errorWithRequestComments")}
				theme={TextTheme.ERROR}
			/>
		)
	}

	return (
		<div className={classNamesHelp(styles.CommentList, {}, [className])}>{commentElements}</div>
	)
})
