import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Card } from "@ui/Card/Card"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { memo } from "react"
import { ArticleItemViews } from "../../../../constants/ArticleItemViews.constant"
import styles from "./ArticleItemSkeleton.module.scss"

type ArticleItemSkeletonProps = {
	className?: string
	view: ArticleItemViews
}
export const ArticleItemSkeleton = memo<ArticleItemSkeletonProps>(props => {
	const { className, view } = props

	if (view === ArticleItemViews.DETAILED) {
		return (
			<Card className={classNamesHelp(styles.ArticleItemSkeletonDetailed, {}, [className])}>
				<div className={styles.headerWrapper}>
					<Skeleton
						theme={SkeletonTheme.CIRCLE}
						className={styles.avatar}
					/>

					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.header}
					/>
				</div>
				<Skeleton
					theme={SkeletonTheme.RECTANGLE}
					className={styles.title}
				/>
				<Skeleton
					theme={SkeletonTheme.RECTANGLE}
					className={styles.img}
				/>
				<div className={styles.content}>
					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.contentItem}
					/>
					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.contentItem}
					/>
					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.contentItem}
					/>
				</div>

				<Skeleton
					theme={SkeletonTheme.RECTANGLE}
					className={styles.footer}
				/>
			</Card>
		)
	}

	return (
		<Card className={classNamesHelp(styles.ArticleItemSkeletonPlate, {}, [className])}>
			<Skeleton
				theme={SkeletonTheme.RECTANGLE}
				className={styles.img}
			/>
			<Skeleton
				theme={SkeletonTheme.RECTANGLE}
				className={styles.header}
			/>
			<Skeleton
				theme={SkeletonTheme.RECTANGLE}
				className={styles.content}
			/>
		</Card>
	)
})
