import { ArticleItemList } from "@entities/Article"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { Text, TextSize } from "@ui/Text"
import { HTMLAttributeAnchorTarget, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getArticlesRecommendationDataSelector } from "../../store/selectors/getArticlesRecommendationData/getArticlesRecommendationData.selector"
import { getArticlesRecommendationErrorSelector } from "../../store/selectors/getArticlesRecommendationError/getArticlesRecommendationError.selector"
import { getArticlesRecommendationIsLoadingSelector } from "../../store/selectors/getArticlesRecommendationIsLoading/getArticlesRecommendationIsLoading.selector"
import { articlesRecommendationReducer } from "../../store/slice/articlesRecommendation.slice"
import { fetchArticlesRecommendationThunk } from "../../store/thunks/fetchArticlesRecommendation/fetchArticlesRecommendation.thunk"
import styles from "./ArticlesRecommendation.module.scss"

type ArticlesRecommendationProps = {
	className?: string
}

const initReducer: asyncReducersList = {
	articlesRecommendation: articlesRecommendationReducer
}

export const ArticlesRecommendation = memo<ArticlesRecommendationProps>(props => {
	const { className } = props

	useAsyncReducer(initReducer)

	const dispatch = useAppDispatch()

	const data = useSelector(getArticlesRecommendationDataSelector)
	const isLoading = useSelector(getArticlesRecommendationIsLoadingSelector)
	const error = useSelector(getArticlesRecommendationErrorSelector)

	const { t } = useTranslation()

	useInitialEffect(
		useCallback(() => {
			dispatch(fetchArticlesRecommendationThunk())
		}, [dispatch])
	)

	const target: HTMLAttributeAnchorTarget = "_blank"

	return (
		<div className={classNamesHelp(styles.ArticlesRecommendation, {}, [className])}>
			<Text
				title={t("article:recommendation")}
				size={TextSize.BIG}
			/>
			<ArticleItemList
				className={styles.list}
				target={target}
				articles={data}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	)
})
