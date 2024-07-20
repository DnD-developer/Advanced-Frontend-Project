import { ArticleItemList, ArticleItemViews } from "@entities/Article"
import {
	ChangeViewArticlesList,
	getArticlesListViewSelector
} from "@features/ChangeViewArticlesList"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { memo, useCallback } from "react"
import { useSelector } from "react-redux"
import { getArticlesListDataSelector } from "../../store/selectors/getArticlesListData/getArticlesListData.selector"
import { getArticlesListErrorSelector } from "../../store/selectors/getArticlesListError/getArticlesListError.selector"
import { getArticlesListIsLoadingSelector } from "../../store/selectors/getArticlesListIsLoading/getArticlesListIsLoading.selector"
import { getArticlesListPageNumberSelector } from "../../store/selectors/getArticlesListPageNumber/getArticlesListPageNumber.selector"
import { articlesListActions, articlesListReducer } from "../../store/slices/articlesList.slice"
import { fetchArticlesThunk } from "../../store/thunks/fetchArticles/fetchArticles.thunk"
import styles from "./ArticlesList.module.scss"

type ArticlesList = {
	className?: string
}

const initialReducer: asyncReducersList = {
	articlesListStateMap: articlesListReducer
}

export const ArticlesList = memo<ArticlesList>(props => {
	const { className } = props

	useAsyncReducer(initialReducer)
	const dispatch = useAppDispatch()

	const { setView, initState } = articlesListActions

	const pageNumber = useSelector(getArticlesListPageNumberSelector)

	useInitialEffect(
		useCallback(() => {
			dispatch(initState())
			dispatch(fetchArticlesThunk(pageNumber))
		}, [dispatch, initState, pageNumber])
	)

	const data = useSelector(getArticlesListDataSelector)
	const isLoading = useSelector(getArticlesListIsLoadingSelector)
	const error = useSelector(getArticlesListErrorSelector)
	const view = useSelector(getArticlesListViewSelector)

	const onChangeViewHandler = useCallback(
		(newView: ArticleItemViews) => {
			dispatch(setView(newView))
		},
		[dispatch, setView]
	)

	return (
		<div className={classNamesHelp(styles.ArticlesList, {}, [className])}>
			<div className={styles.changeView}>
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
