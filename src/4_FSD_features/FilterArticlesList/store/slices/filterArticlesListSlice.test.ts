import type { DeepPartial } from "@customTypes/global.types"
import { ArticleTypeConstant } from "@entities/Article/constants/Article.constant"
import { describe, expect, test } from "@jest/globals"
import { ArticleSortFieldConstant } from "../../constants/ArticleSortField.constant"
import type { filterArticlesListStateMap } from "../storeTypes/filterArticlesListState.map"
import { filterArticlesListActions, filterArticlesListReducer } from "./filterArticlesList.slice"

describe("filterArticlesListSliceTest", () => {
	test("setOrder", () => {
		const state: DeepPartial<filterArticlesListStateMap> = {
			order: "ASC"
		}

		const newState = filterArticlesListReducer(
			state as filterArticlesListStateMap,
			filterArticlesListActions.setOrder("DESC")
		)

		expect(newState).toEqual({
			order: "DESC"
		})
	})

	test("setSearch", () => {
		const state: DeepPartial<filterArticlesListStateMap> = {
			search: ""
		}

		const newState = filterArticlesListReducer(
			state as filterArticlesListStateMap,
			filterArticlesListActions.setSearch("JS")
		)

		expect(newState).toEqual({
			search: "JS"
		})
	})

	test("setSortField", () => {
		const state: DeepPartial<filterArticlesListStateMap> = {
			sortField: ArticleSortFieldConstant.TITLE
		}

		const newState = filterArticlesListReducer(
			state as filterArticlesListStateMap,
			filterArticlesListActions.setSortField(ArticleSortFieldConstant.VIEW)
		)

		expect(newState).toEqual({
			sortField: ArticleSortFieldConstant.VIEW
		})
	})

	test("setType", () => {
		const state: DeepPartial<filterArticlesListStateMap> = {
			typeTopic: "ALL"
		}

		const newState = filterArticlesListReducer(
			state as filterArticlesListStateMap,
			filterArticlesListActions.setType(ArticleTypeConstant.IT)
		)

		expect(newState).toEqual({
			typeTopic: ArticleTypeConstant.IT
		})
	})
})
