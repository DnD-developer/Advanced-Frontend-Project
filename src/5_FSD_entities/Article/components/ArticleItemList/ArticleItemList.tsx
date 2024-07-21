import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleItemStateMap } from "../../store/storeTypes/articleItemState.map"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import styles from "./ArticleItemList.module.scss"
import { ArticlesItemListSkeleton } from "./ui/ArticlesItemListSkeleton/ArticlesItemListSkeleton"

type ArticleItemListProps = {
	className?: string
	view: ArticleItemViews
	articles: articleItemStateMap["article"][]
	isLoading: articleItemStateMap["isLoading"]
	error: articleItemStateMap["error"]
}

export const ArticleItemList = memo<ArticleItemListProps>(props => {
	const { className, view, articles = [], isLoading, error } = props

	const { t } = useTranslation("article")

	let element: ReactNode

	if (articles.length) {
		element = articles.map(article => (
			<ArticleItem
				key={article.id}
				className={styles.item}
				view={view}
				isLoading={false}
				article={article}
				error={error}
			/>
		))
	}

	const noArticlesElement = (
		<Text
			className={styles.text}
			title={t("article:articlesNotFound")}
			size={TextSize.BIG}
			align={TextAlign.CENTER}
		/>
	)

	const loadingElement = (
		<ArticlesItemListSkeleton
			view={view}
			className={styles.item}
		/>
	)

	if (error) {
		element = (
			<Text
				className={styles.text}
				title={t("article:errorWithRequestArticle")}
				size={TextSize.BIG}
				align={TextAlign.CENTER}
				theme={TextTheme.ERROR}
			/>
		)
	}

	return (
		<div className={classNamesHelp(styles.ArticleItemList, {}, [className])}>
			{!articles.length && !isLoading && !error ? noArticlesElement : element}
			{isLoading && loadingElement}
		</div>
	)
})
