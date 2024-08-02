import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesRecommendationDataSelector } from "./getArticlesRecommendationData.selector"

describe(getArticlesRecommendationDataSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesRecommendation: { ids: ["1"], entities: { "1": { id: "1" } } }
		}
		expect(getArticlesRecommendationDataSelector(state as mainStateMap)).toEqual([{ id: "1" }])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesRecommendationDataSelector(state as mainStateMap)).toEqual([])
	})
})
