import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ArticleSortFieldConstant } from "../../constants/ArticleSortField.constant"
import { filterArticlesListStateMap } from "../storeTypes/filterArticlesListState.map"

const initialState: filterArticlesListStateMap = {
	order: "ASC",
	sortField: ArticleSortFieldConstant.TITLE,
	search: "",
	typeTopic: "ALL"
}

const filterArticlesListSlice = createSlice({
	name: "filterArticlesList",
	initialState,
	reducers: {
		setOrder: (state, action: PayloadAction<filterArticlesListStateMap["order"]>) => {
			state.order = action.payload
		},
		setSearch: (state, action: PayloadAction<filterArticlesListStateMap["search"]>) => {
			state.search = action.payload
		},
		setSortField: (state, action: PayloadAction<filterArticlesListStateMap["sortField"]>) => {
			state.sortField = action.payload
		},
		setType: (state, action: PayloadAction<filterArticlesListStateMap["typeTopic"]>) => {
			state.typeTopic = action.payload
		}
	}
})

export const { actions: filterArticlesListActions } = filterArticlesListSlice
export const { reducer: filterArticlesListReducer } = filterArticlesListSlice
