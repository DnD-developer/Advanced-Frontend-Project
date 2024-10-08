import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Card } from "@ui/Card"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"
import { HStack, VStack } from "@ui/Stack"
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
				<VStack gap={"gap24"}>
					<HStack
						align={"center"}
						gap={"gap16"}
					>
						<Skeleton
							theme={SkeletonTheme.CIRCLE}
							className={styles.avatar}
						/>

						<Skeleton
							theme={SkeletonTheme.RECTANGLE}
							className={styles.header}
						/>
					</HStack>
					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.title}
					/>
					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.img}
					/>

					<VStack
						gap={"gap8"}
						className={styles.content}
					>
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
					</VStack>

					<Skeleton
						theme={SkeletonTheme.RECTANGLE}
						className={styles.footer}
					/>
				</VStack>
			</Card>
		)
	}

	return (
		<Card className={classNamesHelp(styles.ArticleItemSkeletonPlate, {}, [className])}>
			<VStack gap={"gap16"}>
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
			</VStack>
		</Card>
	)
})
