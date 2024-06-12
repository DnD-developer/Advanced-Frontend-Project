import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { memo } from "react"
import styles from "./ArticleDetailsSkeleton.module.scss"

type SkeletonProps = {
	className?: string
}
export const ArticlesDetailsSkeleton = memo<SkeletonProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp(styles.Skeleton, {}, [className])}>
			<Skeleton
				theme={SkeletonTheme.CIRCLE}
				className={styles.center}
				height="200px"
				width="200px"
			/>
			<Skeleton
				theme={SkeletonTheme.RECTANGLE}
				height="20"
				width="669px"
				className={styles.skeletonItem}
			/>
			<Skeleton
				height="20"
				width="399px"
				theme={SkeletonTheme.RECTANGLE}
				className={styles.skeletonItem}
			/>
			<Skeleton
				height="200px"
				theme={SkeletonTheme.RECTANGLE}
				className={styles.skeletonItem}
			/>
			<Skeleton
				height="200px"
				theme={SkeletonTheme.RECTANGLE}
				className={styles.skeletonItem}
			/>
		</div>
	)
})
