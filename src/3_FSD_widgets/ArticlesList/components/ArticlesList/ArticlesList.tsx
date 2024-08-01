import { ArticleItemList, ArticleItemViews } from "@entities/Article"
import {
	ChangeViewArticlesList,
	getArticlesListViewSelector
} from "@features/ChangeViewArticlesList"
import { FilterArticlesList } from "@features/FilterArticlesList"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"

import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { memo, useCallback } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { getArticlesListDataSelector } from "../../store/selectors/getArticlesListData/getArticlesListData.selector"
import { getArticlesListErrorSelector } from "../../store/selectors/getArticlesListError/getArticlesListError.selector"
import { getArticlesListIsLoadingSelector } from "../../store/selectors/getArticlesListIsLoading/getArticlesListIsLoading.selector"
import { articlesListActions, articlesListReducer } from "../../store/slices/articlesList.slice"
import { fetchArticlesThunk } from "../../store/thunks/fetchArticles/fetchArticles.thunk"
import { initArticlesListThunk } from "../../store/thunks/initArticlesList/initArticlesList.thunk"
import styles from "./ArticlesList.module.scss"

type ArticlesList = {
	className?: string
}

const initialReducer: asyncReducersList = {
	articlesListStateMap: articlesListReducer
}

export const ArticlesList = memo<ArticlesList>(props => {
	const { className } = props

	useAsyncReducer(initialReducer, false)
	const dispatch = useAppDispatch()

	const { setView, initState } = articlesListActions

	const [searchParams] = useSearchParams()

	useInitialEffect(
		useCallback(() => {
			dispatch(initArticlesListThunk(searchParams))
		}, [dispatch, searchParams])
	)

	const data = useSelector(getArticlesListDataSelector)
	const isLoading = useSelector(getArticlesListIsLoadingSelector)
	const error = useSelector(getArticlesListErrorSelector)
	const view = useSelector(getArticlesListViewSelector)

	const onFetchFilterArticles = useCallback(() => {
		dispatch(initState())
		dispatch(fetchArticlesThunk({ replace: true }))
	}, [dispatch, initState])

	const onChangeViewHandler = useCallback(
		(newView: ArticleItemViews) => {
			dispatch(setView(newView))
		},
		[dispatch, setView]
	)

	return (
		<div className={classNamesHelp(styles.ArticlesList, {}, [className])}>
			<div className={styles.header}>
				<FilterArticlesList callback={onFetchFilterArticles} />
				<ChangeViewArticlesList onChangeView={onChangeViewHandler} />
			</div>

			<ArticleItemList
				view={view}
				articles={data}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	)
})
