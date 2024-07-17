import { ArticleItemViews } from "@entities/Article"
import { createSelector } from "@reduxjs/toolkit"
import { articlesListStateMap } from "../../storeTypes/articlesListState.map"
import { getArticlesListSelector } from "../getArticlesList/getArticlesList.selector"

export const getArticlesListViewSelector = createSelector(
	getArticlesListSelector,
	(state?: articlesListStateMap) => state?.view || ArticleItemViews.PlATES
)
