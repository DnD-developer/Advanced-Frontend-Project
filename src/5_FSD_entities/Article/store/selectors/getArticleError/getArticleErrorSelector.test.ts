import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticleErrorSelector } from "./getArticleError.selector"

describe(getArticleErrorSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articleDetails: { error: "tests error" }
		}
		expect(getArticleErrorSelector(state as mainStateMap)).toBe(state.articleDetails?.error)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticleErrorSelector(state as mainStateMap)).toBe("")
	})
})
