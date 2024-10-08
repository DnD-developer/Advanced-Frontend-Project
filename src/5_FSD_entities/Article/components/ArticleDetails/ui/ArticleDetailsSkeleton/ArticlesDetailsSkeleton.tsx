import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { VStack } from "@ui/Stack"
import { memo } from "react"
import styles from "./ArticleDetailsSkeleton.module.scss"

type SkeletonProps = {
	className?: string
}
export const ArticlesDetailsSkeleton = memo<SkeletonProps>(props => {
	const { className } = props

	return (
		<VStack
			gap={"gap24"}
			className={classNamesHelp("", {}, [className])}
		>
			<Skeleton
				theme={SkeletonTheme.CIRCLE}
				className={styles.center}
				height="200px"
				width="200px"
			/>
			<Skeleton
				theme={SkeletonTheme.RECTANGLE}
				height="20px"
				width="669px"
			/>
			<Skeleton
				height="20px"
				width="399px"
				theme={SkeletonTheme.RECTANGLE}
			/>
			<Skeleton
				height="200px"
				width="100%"
				theme={SkeletonTheme.RECTANGLE}
			/>
			<Skeleton
				height="200px"
				width="100%"
				theme={SkeletonTheme.RECTANGLE}
			/>
		</VStack>
	)
})
