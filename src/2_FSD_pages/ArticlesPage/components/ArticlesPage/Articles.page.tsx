import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import {
	ArticlesList,
	fetchNextArticlesPageThunk,
	getArticlesListIsLoadingSelector
} from "@widgets/ArticlesList"
import { getArticlesListErrorSelector } from "@widgets/ArticlesList/store/selectors/getArticlesListError/getArticlesListError.selector"
import { Page } from "@widgets/Page"
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
	const articlesError = useSelector(getArticlesListErrorSelector)

	const onScrollEndHandler = useCallback(() => {
		if (!articlesIsLoading && !articlesError && __PROJECT__ !== "storybook") {
			dispatch(fetchNextArticlesPageThunk())
		}
	}, [dispatch, articlesIsLoading, articlesError])

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
