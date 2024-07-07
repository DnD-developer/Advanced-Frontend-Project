import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Card } from "@ui/Card/Card"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { memo } from "react"
import { ArticleItemViews } from "../../../../constants/ArticleItemViews.constant"
import styles from "./ArticleListItemSkeleton.module.scss"

type ArticleListItemSkeletonProps = {
	className?: string
	view: ArticleItemViews
}
export const ArticleListItemSkeleton = memo<ArticleListItemSkeletonProps>(props => {
	const { className, view } = props

	if (view === ArticleItemViews.DETAILED) {
		return (
			<Card className={classNamesHelp(styles.ArticleSkeletonDetailed, {}, [className])}>
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
		<Card className={classNamesHelp(styles.ArticleListItemSkeletonPlate, {}, [className])}>
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
