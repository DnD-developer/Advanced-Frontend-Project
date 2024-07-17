import { LOCAL_STORAGE_VIEW_ARTICLES_KEY } from "@constants/localStorage.constant"
import { ArticleItemList, ArticleItemViews } from "@entities/Article"
import { ChangeViewList } from "@features/ChangeViewList"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { memo, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { getArticlesListDataSelector } from "../../store/selectors/getArticlesListData/getArticlesListData.selector"
import { getArticlesListErrorSelector } from "../../store/selectors/getArticlesListError/getArticlesListError.selector"
import { getArticlesListIsLoadingSelector } from "../../store/selectors/getArticlesListIsLoading/getArticlesListIsLoading.selector"
import { getArticlesListViewSelector } from "../../store/selectors/getArticlesView/getArticlesListView.selector"
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

	const { setView } = articlesListActions

	const defaultView =
		(localStorage.getItem(LOCAL_STORAGE_VIEW_ARTICLES_KEY) as ArticleItemViews) ||
		ArticleItemViews.PlATES

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(setView(defaultView))
			dispatch(fetchArticlesThunk())
		}
	}, [defaultView, dispatch, setView])

	const data = useSelector(getArticlesListDataSelector)
	const isLoading = useSelector(getArticlesListIsLoadingSelector)
	const error = useSelector(getArticlesListErrorSelector)
	const view = useSelector(getArticlesListViewSelector)

	const onChangeToPlateHandler = useCallback(() => {
		dispatch(setView(ArticleItemViews.PlATES))
	}, [dispatch, setView])

	const onChangeToDetailedHandler = useCallback(() => {
		dispatch(setView(ArticleItemViews.DETAILED))
	}, [dispatch, setView])

	return (
		<div className={classNamesHelp(styles.ArticlesList, {}, [className])}>
			<div className={styles.changeView}>
				<ChangeViewList
					defaultView={
						defaultView === ArticleItemViews.PlATES ? "plateView" : "detailedView"
					}
					changeViewToPlate={onChangeToPlateHandler}
					changeViewToDetailed={onChangeToDetailedHandler}
				/>
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
