import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticleIsLoadingSelector } from "./getArticleIsLoading.selector"

describe(getArticleIsLoadingSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articleDetails: { isLoading: true }
		}
		expect(getArticleIsLoadingSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticleIsLoadingSelector(state as mainStateMap)).toBe(false)
	})
})
