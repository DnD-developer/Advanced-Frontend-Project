import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { memo } from "react"
import styles from "./CommentCardSkeleton.module.scss"

type CommentCardSkeletonProps = {
	className?: string
}
export const CommentCardSkeleton = memo<CommentCardSkeletonProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp(styles.CommentCardSkeleton, {}, [className])}>
			<div className={styles.header}>
				<Skeleton
					theme={SkeletonTheme.CIRCLE}
					width={"30px"}
					height={"30px"}
				/>
				<Skeleton
					className={styles.title}
					theme={SkeletonTheme.RECTANGLE}
					width={"100%"}
					height={"30px"}
				/>
			</div>
			<Skeleton
				className={styles.text}
				theme={SkeletonTheme.RECTANGLE}
				width={"100%"}
				height={"60px"}
			/>
		</div>
	)
})
