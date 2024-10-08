import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFilterArticlesListSearchSelector } from "./getFilterArticlesListSearch.selector"

describe(getFilterArticlesListSearchSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			filterArticlesList: { search: "test" }
		}
		expect(getFilterArticlesListSearchSelector(state as mainStateMap)).toBe("test")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFilterArticlesListSearchSelector(state as mainStateMap)).toBe("")
	})
})
