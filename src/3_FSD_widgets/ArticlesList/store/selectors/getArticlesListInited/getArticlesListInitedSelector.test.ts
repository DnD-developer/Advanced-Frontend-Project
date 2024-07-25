import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListInitedSelector } from "./getArticlesListInited.selector"

describe(getArticlesListInitedSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: { _inited: true }
		}
		expect(getArticlesListInitedSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListInitedSelector(state as mainStateMap)).toBe(false)
	})
})
