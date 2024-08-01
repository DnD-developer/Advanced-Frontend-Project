import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFilterArticlesListSelector } from "./getFilterArticlesListSelector"

describe("getFilterArticlesListSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			filterArticlesList: {
				order: "ASC"
			}
		}
		expect(getFilterArticlesListSelector(state as mainStateMap)).toEqual({
			order: "ASC"
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFilterArticlesListSelector(state as mainStateMap)).toEqual(undefined)
	})
})
