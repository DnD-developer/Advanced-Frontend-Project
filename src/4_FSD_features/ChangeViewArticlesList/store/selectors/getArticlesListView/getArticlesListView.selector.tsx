import { ArticleItemViews } from "@entities/Article"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const getArticlesListViewSelector = (state: mainStateMap) =>
	state?.articlesListStateMap?.view || ArticleItemViews.PlATES
