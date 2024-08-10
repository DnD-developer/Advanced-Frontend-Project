import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HStack } from "@ui/Stack"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { HTMLAttributeAnchorTarget, memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleItemStateMap } from "../../store/storeTypes/articleItemState.map"
import { ArticleItem } from "../ArticleItem/ArticleItem"
import styles from "./ArticleItemList.module.scss"
import { ArticlesItemListSkeleton } from "./ui/ArticlesItemListSkeleton/ArticlesItemListSkeleton"

type ArticleItemListProps = {
	className?: string
	view?: ArticleItemViews
	articles: articleItemStateMap["article"][]
	isLoading: articleItemStateMap["isLoading"]
	target?: HTMLAttributeAnchorTarget
	error: articleItemStateMap["error"]
}

export const ArticleItemList = memo<ArticleItemListProps>(props => {
	const {
		className,
		view = ArticleItemViews.PlATES,
		articles = [],
		isLoading,
		error,
		target
	} = props

	const { t } = useTranslation("article")

	let element: ReactNode

	if (articles.length) {
		element = articles.map(article => (
			<ArticleItem
				key={article.id}
				target={target}
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

	const loadingElement = <ArticlesItemListSkeleton view={view} />

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
		<HStack
			role={"list"}
			align={"center"}
			gap={"gap16"}
			className={classNamesHelp(styles.ArticleItemList, {}, [className])}
		>
			{!articles.length && !isLoading && !error ? noArticlesElement : element}
			{isLoading && loadingElement}
		</HStack>
	)
})
