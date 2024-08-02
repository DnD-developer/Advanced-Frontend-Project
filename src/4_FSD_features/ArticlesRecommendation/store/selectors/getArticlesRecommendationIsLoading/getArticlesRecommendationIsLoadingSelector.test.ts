import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesRecommendationIsLoadingSelector } from "./getArticlesRecommendationIsLoading.selector"

describe(getArticlesRecommendationIsLoadingSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesRecommendation: { isLoading: true }
		}
		expect(getArticlesRecommendationIsLoadingSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesRecommendationIsLoadingSelector(state as mainStateMap)).toBe(false)
	})
})
