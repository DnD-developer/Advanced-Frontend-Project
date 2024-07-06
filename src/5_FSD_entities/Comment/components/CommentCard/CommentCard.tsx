import { PagesPaths } from "@config/routes/routePaths"
import { FAKE_AVATAR } from "@constants/common.constant"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { Avatar, AvatarSize } from "@ui/Avatar"
import { Text } from "@ui/Text"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { commentDataType } from "../../types/commentData.type"
import styles from "./CommentCard.module.scss"
import { CommentCardSkeleton } from "./ui/CommentCardSkeleton/CommentCardSkeleton"

type CommentCardProps = {
	className?: string
	isLoading: boolean
	comment?: commentDataType
}
export const CommentCard = memo<CommentCardProps>(props => {
	const { className, comment, isLoading = false } = props

	const { t } = useTranslation()

	if (isLoading) {
		return <CommentCardSkeleton className={className} />
	}

	const faikAvatar = FAKE_AVATAR

	if (comment) {
		return (
			<div className={classNamesHelp(styles.CommentCard, {}, [className])}>
				<AppLink
					className={styles.header}
					to={`${PagesPaths.PROFILE}/${comment.user.id}`}
				>
					<Avatar
						src={comment.user?.avatar || faikAvatar}
						size={AvatarSize.SMALL}
						alt={t("avatar")}
					/>
					<Text
						title={comment.user.userName}
						className={styles.title}
					/>
				</AppLink>
				<Text
					text={comment.text}
					className={styles.text}
				/>
			</div>
		)
	}

	return null
})
