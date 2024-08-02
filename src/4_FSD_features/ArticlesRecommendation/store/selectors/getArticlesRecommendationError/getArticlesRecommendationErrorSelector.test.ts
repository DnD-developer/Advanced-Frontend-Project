import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesRecommendationErrorSelector } from "./getArticlesRecommendationError.selector"

describe(getArticlesRecommendationErrorSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesRecommendation: { error: "test" }
		}
		expect(getArticlesRecommendationErrorSelector(state as mainStateMap)).toBe("test")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesRecommendationErrorSelector(state as mainStateMap)).toBe("")
	})
})
