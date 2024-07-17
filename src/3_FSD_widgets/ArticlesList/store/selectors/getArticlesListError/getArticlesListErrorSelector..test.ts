import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListErrorSelector } from "./getArticlesListError.selector"

describe(getArticlesListErrorSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				error: "error string"
			}
		}
		expect(getArticlesListErrorSelector(state as mainStateMap)).toBe("error string")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListErrorSelector(state as mainStateMap)).toBe(undefined)
	})
})
