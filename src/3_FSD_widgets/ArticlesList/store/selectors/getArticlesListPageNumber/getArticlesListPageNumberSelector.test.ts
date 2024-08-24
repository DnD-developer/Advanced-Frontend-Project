import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListPageNumberSelector } from "./getArticlesListPageNumber.selector"

describe(getArticlesListPageNumberSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: { pageNumber: 2 }
		}
		expect(getArticlesListPageNumberSelector(state as mainStateMap)).toBe(2)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListPageNumberSelector(state as mainStateMap)).toBe(1)
	})
})
