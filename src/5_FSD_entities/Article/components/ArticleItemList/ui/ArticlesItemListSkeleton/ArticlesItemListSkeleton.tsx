import { memo } from "react"
import {
	ArticleItemViews,
	CountArticleItemOfView
} from "../../../../constants/ArticleItemViews.constant"
import { ArticleItem } from "../../../ArticleItem/ArticleItem"

type ArticlesItemListSkeletonProps = {
	className?: string
	view: ArticleItemViews
}
export const ArticlesItemListSkeleton = memo<ArticlesItemListSkeletonProps>(props => {
	const { className, view } = props

	return Array(CountArticleItemOfView.DETAILED)
		.fill(1)
		.map((_, i) => {
			return (
				<ArticleItem
					className={className}
					key={i}
					view={view}
					isLoading={true}
				/>
			)
		})
})
