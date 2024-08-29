import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink, AppLinkTheme } from "@ui/AppLink"
import { Card } from "@ui/Card"
import { Text } from "@ui/Text"
import { memo } from "react"
import type { notificationData } from "../../types/notificationData.type"
import { NotificationSkeleton } from "./ui/NotificationSkeleton/NotificationSkeleton"

type NotificationItemProps = {
	className?: string
	data?: notificationData
	isLoading?: boolean
}
export const NotificationItem = memo<NotificationItemProps>(props => {
	const { className, data, isLoading } = props

	if (isLoading) {
		return <NotificationSkeleton />
	}

	if (data) {
		const content = (
			<Text
				title={data.title}
				text={data.description}
			/>
		)

		return (
			<Card className={classNamesHelp("", {}, [className])}>
				{data?.href ?
					<AppLink
						theme={AppLinkTheme.PRIMARY}
						to={data.href}
					>
						{content}
					</AppLink>
				:	content}
			</Card>
		)
	}

	return null
})
