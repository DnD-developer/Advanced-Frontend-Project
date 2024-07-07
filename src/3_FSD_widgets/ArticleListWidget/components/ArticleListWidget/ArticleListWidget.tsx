import { ArticleItemViews, ArticleList, articleListStateMap } from "@entities/Article"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import styles from "./ArticleListWidget.module.scss"
import articles from "./articles.data.json"

type ArticleListWidgetProps = {
	className?: string
}
export const ArticleListWidget = memo<ArticleListWidgetProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp(styles.ArticleListWidget, {}, [className])}>
			<ArticleList
				view={ArticleItemViews.DETAILED}
				articles={articles as articleListStateMap["articles"]}
				isLoading={false}
			/>
		</div>
	)
})
