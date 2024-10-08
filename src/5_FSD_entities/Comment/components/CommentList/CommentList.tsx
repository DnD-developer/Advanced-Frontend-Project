import { VStack } from "@ui/Stack"
import { Text, TextAlign, TextTheme } from "@ui/Text"
import type { ReactNode } from "react"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import type { commentListStateMap } from "../../store/storeTypes/commentListState.map"
import type { commentDataType } from "../../types/commentData.type"
import { CommentCard } from "../CommentCard/CommentCard"

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
				key={comment.id}
				isLoading={isLoading}
				comment={comment}
			/>
		))
	}

	if (isLoading) {
		commentElements = (
			<>
				<CommentCard isLoading={isLoading} />
				<CommentCard isLoading={isLoading} />
				<CommentCard isLoading={isLoading} />
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
		<VStack
			gap={"gap16"}
			align={"center"}
			className={className}
		>
			{commentElements}
		</VStack>
	)
})
