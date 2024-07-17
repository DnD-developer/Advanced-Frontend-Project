import { PagesPaths } from "@config/routes/routePaths"
import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
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
	isLoading: articleItemStateMap["isLoading"]
	error?: articleItemStateMap["error"]
}

export const ArticleItem = memo<ArticleItemProps>(props => {
	const { className, article, view = ArticleItemViews.PlATES, isLoading, error } = props

	const navigate = useNavigate()

	const onClickHandler = useCallback(() => {
		if (__PROJECT__ !== "storybook") {
			navigate(`${PagesPaths.ARTICLES}/${article?.id}`)
		}
	}, [article?.id, navigate])

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
					onClickHandler={onClickHandler}
					article={article}
					className={className}
				/>
			)
		}

		if (view === ArticleItemViews.DETAILED) {
			return (
				<ArticleItemDetailedRender
					article={article}
					onClickHandler={onClickHandler}
					className={className}
				/>
			)
		}
	}

	return null
})
