import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFilterArticlesListOrderSelector } from "./getFilterArticlesListOrder.selector"

describe(getFilterArticlesListOrderSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			filterArticlesList: {
				order: "DESC"
			}
		}
		expect(getFilterArticlesListOrderSelector(state as mainStateMap)).toBe("DESC")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFilterArticlesListOrderSelector(state as mainStateMap)).toBe("ASC")
	})
})
