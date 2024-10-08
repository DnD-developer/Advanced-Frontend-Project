import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListLimitSelector } from "./getArticlesListLimit.selector"

describe(getArticlesListLimitSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: { limit: 8 }
		}
		expect(getArticlesListLimitSelector(state as mainStateMap)).toBe(8)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListLimitSelector(state as mainStateMap)).toBe(9)
	})
})
