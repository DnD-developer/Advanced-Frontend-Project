import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesRecommendationSelector } from "./getArticlesRecommendation.selector"

describe(getArticlesRecommendationSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesRecommendation: { isLoading: false }
		}
		expect(getArticlesRecommendationSelector(state as mainStateMap)).toEqual({
			isLoading: false
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesRecommendationSelector(state as mainStateMap)).toEqual(undefined)
	})
})
