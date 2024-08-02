import { HTMLAttributeAnchorTarget, memo } from "react"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleItemStateMap } from "../../store/storeTypes/articleItemState.map"
import { ArticleItemDetailedRender } from "./renders/ArticleItemDetailed/ArticleItemDetailed.render"
import { ArticleItemPlateRender } from "./renders/ArticleItemPlate/ArticleItemPlate.render"
import { ArticleItemError } from "./ui/ArticleItemError.tsx/ArticleItemError"
import { ArticleItemSkeleton } from "./ui/ArticleItemSkeleton/ArticleItemSkeleton"

type ArticleItemProps = {
	className?: string
	view: ArticleItemViews
	article?: articleItemStateMap["article"]
	target?: HTMLAttributeAnchorTarget
	isLoading: articleItemStateMap["isLoading"]
	error?: articleItemStateMap["error"]
}

export const ArticleItem = memo<ArticleItemProps>(props => {
	const { className, article, view = ArticleItemViews.PlATES, isLoading, error, target } = props

	if (isLoading) {
		return (
			<ArticleItemSkeleton
				className={className}
				view={view}
			/>
		)
	}

	if (error) {
		return <ArticleItemError className={className} />
	}

	if (article) {
		if (view === ArticleItemViews.PlATES) {
			return (
				<ArticleItemPlateRender
					target={target}
					article={article}
					className={className}
				/>
			)
		}

		if (view === ArticleItemViews.DETAILED) {
			return (
				<ArticleItemDetailedRender
					target={target}
					article={article}
					className={className}
				/>
			)
		}
	}

	return null
})
