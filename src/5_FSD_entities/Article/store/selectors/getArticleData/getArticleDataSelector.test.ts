import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticleDataSelector } from "./getArticleData.selector"

describe(getArticleDataSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articleDetails: { data: { id: "1" } }
		}
		expect(getArticleDataSelector(state as mainStateMap)).toEqual(state.articleDetails?.data)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticleDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
