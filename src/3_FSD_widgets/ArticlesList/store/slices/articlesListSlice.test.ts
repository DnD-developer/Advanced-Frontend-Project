import { DeepPartial } from "@customTypes/global.types"
import { articleDetailsDataType, ArticleItemViews, CountArticleItemOfView } from "@entities/Article"
import { describe, expect, test } from "@jest/globals"
import { articlesListStateMap } from "../storeTypes/articlesListState.map"
import { fetchArticlesThunk } from "../thunks/fetchArticles/fetchArticles.thunk"
import { articlesListActions, articlesListReducer } from "./articlesList.slice"

describe("articlesListSliceTest Reducers", () => {
	test("initState", () => {
		const state: DeepPartial<articlesListStateMap> = {
			view: undefined,
			limit: 0
		}

		const initState = articlesListActions.initState()

		const newState = articlesListReducer(state as articlesListStateMap, initState)

		expect(newState).toEqual({
			view: ArticleItemViews.PlATES,
			limit: CountArticleItemOfView.PlATES
		})
	})

	test("setPage", () => {
		const state: DeepPartial<articlesListStateMap> = {
			pageNumber: 0
		}

		const setPage = articlesListActions.setPage()

		const newState = articlesListReducer(state as articlesListStateMap, setPage)

		expect(newState).toEqual({
			pageNumber: 1
		})
	})

	test("setView To Plates", () => {
		const state: DeepPartial<articlesListStateMap> = {
			view: ArticleItemViews.DETAILED,
			pageNumber: 4,
			ids: Array(16).fill("1"),
			limit: CountArticleItemOfView.DETAILED
		}

		const setView = articlesListActions.setView(ArticleItemViews.PlATES)

		const newState = articlesListReducer(state as articlesListStateMap, setView)

		expect(newState).toEqual({
			view: ArticleItemViews.PlATES,
			pageNumber: 1,
			ids: Array(16).fill("1"),
			limit: CountArticleItemOfView.PlATES
		})
	})

	test("setView To Detailed", () => {
		const state: DeepPartial<articlesListStateMap> = {
			view: ArticleItemViews.PlATES,
			pageNumber: 2,
			ids: Array(24).fill("1"),
			limit: CountArticleItemOfView.PlATES
		}

		const setView = articlesListActions.setView(ArticleItemViews.DETAILED)

		const newState = articlesListReducer(state as articlesListStateMap, setView)

		expect(newState).toEqual({
			view: ArticleItemViews.DETAILED,
			pageNumber: 6,
			ids: Array(24).fill("1"),
			limit: CountArticleItemOfView.DETAILED
		})
	})
})

const data = [{ id: "2" }, { id: "3" }] as articleDetailsDataType[]

describe("articlesListSliceTest ExtraReducers", () => {
	test("pending", () => {
		const state: DeepPartial<articlesListStateMap> = {
			isLoading: false,
			error: "error text"
		}

		const pending = fetchArticlesThunk.pending("", 1)

		const newState = articlesListReducer(state as articlesListStateMap, pending)

		expect(newState).toEqual({
			isLoading: true,
			error: undefined
		})
	})

	test("fulfilled hasMore", () => {
		const state: DeepPartial<articlesListStateMap> = {
			isLoading: true,
			error: "error text",
			hasMore: true,
			ids: ["1"],
			entities: {
				"1": {
					id: "1"
				}
			}
		}

		const fulfilled = fetchArticlesThunk.fulfilled(data, "", 1)

		const newState = articlesListReducer(state as articlesListStateMap, fulfilled)

		expect(newState).toEqual({
			isLoading: false,
			error: undefined,
			hasMore: true,
			ids: ["1", "2", "3"],
			entities: {
				"1": {
					id: "1"
				},
				"2": {
					id: "2"
				},
				"3": {
					id: "3"
				}
			}
		})
	})

	test("fulfilled noMore", () => {
		const state: DeepPartial<articlesListStateMap> = {
			isLoading: true,
			error: "error text",
			hasMore: true,
			ids: ["1"],
			entities: {
				"1": {
					id: "1"
				}
			}
		}

		const fulfilled = fetchArticlesThunk.fulfilled([], "", 1)

		const newState = articlesListReducer(state as articlesListStateMap, fulfilled)

		expect(newState).toEqual({
			isLoading: false,
			error: undefined,
			hasMore: false,
			ids: ["1"],
			entities: {
				"1": {
					id: "1"
				}
			}
		})
	})

	test("rejected", () => {
		const state: DeepPartial<articlesListStateMap> = {
			isLoading: true,
			error: undefined
		}

		const rejected = fetchArticlesThunk.rejected(null, "", 1, "error text")

		const newState = articlesListReducer(state as articlesListStateMap, rejected)

		expect(newState).toEqual({
			isLoading: false,
			error: "error text"
		})
	})
})
