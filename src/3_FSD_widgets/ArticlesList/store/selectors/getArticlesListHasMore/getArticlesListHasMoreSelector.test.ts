import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListHasMoreSelector } from "./getArticlesListHasMore.selector"

describe(getArticlesListHasMoreSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: { hasMore: false }
		}
		expect(getArticlesListHasMoreSelector(state as mainStateMap)).toBe(false)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListHasMoreSelector(state as mainStateMap)).toBe(true)
	})
})
