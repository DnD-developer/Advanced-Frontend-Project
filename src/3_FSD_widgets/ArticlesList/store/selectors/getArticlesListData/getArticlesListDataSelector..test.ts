import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getArticlesListDataSelector } from "./getArticlesListData.selector"

describe(getArticlesListDataSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				entities: {
					"1": {
						id: "1"
					}
				},
				ids: ["1"]
			}
		}
		expect(getArticlesListDataSelector(state as mainStateMap)).toEqual([
			{
				id: "1"
			}
		])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getArticlesListDataSelector(state as mainStateMap)).toEqual([])
	})
})
