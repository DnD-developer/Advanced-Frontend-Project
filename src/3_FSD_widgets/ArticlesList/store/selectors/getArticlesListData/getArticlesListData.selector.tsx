import { mainStateMap } from "@store/storeTypes/mainState.map"
import { articlesListAdapter } from "../../slices/articlesList.slice"

const initialState = articlesListAdapter.getInitialState()

const getArticlesList = articlesListAdapter.getSelectors<mainStateMap>(
	state => state?.articlesListStateMap || initialState
)

export const { selectAll: getArticlesListDataSelector } = getArticlesList
