import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Card } from "@ui/Card"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { VStack } from "@ui/Stack"
import { memo } from "react"

type NotificationSkeletonProps = {
	className?: string
}
export const NotificationSkeleton = memo<NotificationSkeletonProps>(props => {
	const { className } = props

	return (
		<Card className={classNamesHelp("", {}, [className])}>
			<VStack gap={"gap16"}>
				<Skeleton
					theme={SkeletonTheme.RECTANGLE}
					width={"100%"}
					height={30}
				/>

				<Skeleton
					theme={SkeletonTheme.RECTANGLE}
					width={"100%"}
					height={50}
				/>
			</VStack>
		</Card>
	)
})
