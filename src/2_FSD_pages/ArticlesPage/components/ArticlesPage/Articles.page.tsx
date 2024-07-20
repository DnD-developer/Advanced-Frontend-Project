import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { Page } from "@ui/Page"
import {
	ArticlesList,
	fetchNextArticlesPageThunk,
	getArticlesListIsLoadingSelector
} from "@widgets/ArticlesList"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import styles from "./ArticlesPage.module.scss"

type ArticlesPageProps = {
	className?: string
}
const ArticlesPage = memo<ArticlesPageProps>(props => {
	const { className } = props

	const { t } = useTranslation("article")

	const dispatch = useAppDispatch()

	const articlesIsLoading = useSelector(getArticlesListIsLoadingSelector)

	const onScrollEndHandler = useCallback(() => {
		if (!articlesIsLoading) {
			dispatch(fetchNextArticlesPageThunk())
		}
	}, [dispatch, articlesIsLoading])

	return (
		<Page
			className={classNamesHelp("", {}, [className])}
			onScrollEnd={onScrollEndHandler}
		>
			<h1 className="page-header">{t("article:pageTitle")}</h1>
			<ArticlesList className={styles.articlesList} />
		</Page>
	)
})

export default ArticlesPage
