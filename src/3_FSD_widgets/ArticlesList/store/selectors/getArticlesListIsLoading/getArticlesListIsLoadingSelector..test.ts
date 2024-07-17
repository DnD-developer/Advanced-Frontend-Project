import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListIsLoadingSelector } from "./getArticlesListIsLoading.selector"

describe(getArticlesListIsLoadingSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				isLoading: true
			}
		}
		expect(getArticlesListIsLoadingSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListIsLoadingSelector(state as mainStateMap)).toBe(false)
	})
})
