import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleListStateMap } from "../../store/storeTypes/articleListState.map"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import styles from "./ArticleList.module.scss"

type ArticleListProps = {
	className?: string
	view: ArticleItemViews
} & articleListStateMap

export const ArticleList = memo<ArticleListProps>(props => {
	const { className, view, articles = [], isLoading, error } = props

	const { t } = useTranslation("article")

	let element: ReactNode

	if (!articles.length) {
		element = (
			<Text
				className={styles.text}
				title={t("article:articlesNotFound")}
				size={TextSize.BIG}
				align={TextAlign.CENTER}
			/>
		)
	} else {
		element = articles.map(article => (
			<ArticleListItem
				key={article.id}
				className={styles.item}
				view={view}
				isLoading={isLoading}
				article={article}
				error={error}
			/>
		))
	}

	if (isLoading) {
		element = (
			<>
				<ArticleListItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
				<ArticleListItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
				<ArticleListItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
				<ArticleListItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
			</>
		)
	}

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

	return <div className={classNamesHelp(styles.ArticleList, {}, [className])}>{element}</div>
})
