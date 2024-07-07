import { PagesPaths } from "@config/routes/routePaths"
import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleListItemStateMap } from "../../store/storeTypes/articleListItemState.map"
import { ArticleListItemDetailedRender } from "./renders/ArticleListItemDetailed/ArticleListItemDetailed.render"
import { ArticleListItemPlateRender } from "./renders/ArticleListItemPlate/ArticleListItemPlate.render"
import { ArticleListItemError } from "./ui/ArticleListItemErorr.tsx/ArticleListItemError"
import { ArticleListItemSkeleton } from "./ui/ArticleListItemSkeleton/ArticleListItemSkeleton"

type ArticleListItemProps = {
	className?: string
	view: ArticleItemViews
	article?: articleListItemStateMap["article"]
	isLoading: articleListItemStateMap["isLoading"]
	error?: articleListItemStateMap["error"]
}

export const ArticleListItem = memo<ArticleListItemProps>(props => {
	const { className, article, view = ArticleItemViews.PlATES, isLoading, error } = props

	const navigate = useNavigate()

	const onClickHandler = useCallback(() => {
		if (__PROJECT__ !== "storybook") {
			navigate(`${PagesPaths.ARTICLES}/${article?.id}`)
		}
	}, [article?.id, navigate])

	if (isLoading) {
		return (
			<ArticleListItemSkeleton
				className={className}
				view={view}
			/>
		)
	}

	if (error) {
		return <ArticleListItemError className={className} />
	}

	if (article) {
		if (view === ArticleItemViews.PlATES) {
			return (
				<ArticleListItemPlateRender
					onClickHandler={onClickHandler}
					article={article}
					className={className}
				/>
			)
		}

		if (view === ArticleItemViews.DETAILED) {
			return (
				<ArticleListItemDetailedRender
					article={article}
					onClickHandler={onClickHandler}
					className={className}
				/>
			)
		}
	}

	return null
})
