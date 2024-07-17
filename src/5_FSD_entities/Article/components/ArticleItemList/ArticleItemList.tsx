import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleItemStateMap } from "../../store/storeTypes/articleItemState.map"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import styles from "./ArticleItemList.module.scss"

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
			<ArticleItem
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
				<ArticleItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
				<ArticleItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
				<ArticleItem
					className={styles.item}
					view={view}
					isLoading={isLoading}
				/>
				<ArticleItem
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

	return <div className={classNamesHelp(styles.ArticleItemList, {}, [className])}>{element}</div>
})
