import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { ArticleSortFieldConstant } from "../../../constants/ArticleSortField.constant"
import { getFilterArticlesListSortFieldSelector } from "./getFilterArticlesListSortField.selector"

describe(getFilterArticlesListSortFieldSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			filterArticlesList: {
				sortField: ArticleSortFieldConstant.DATE
			}
		}
		expect(getFilterArticlesListSortFieldSelector(state as mainStateMap)).toBe(
			ArticleSortFieldConstant.DATE
		)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFilterArticlesListSortFieldSelector(state as mainStateMap)).toBe(
			ArticleSortFieldConstant.TITLE
		)
	})
})
