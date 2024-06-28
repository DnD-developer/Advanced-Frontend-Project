import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentListDataSelector } from "./getCommentListDataSelector"

describe("getCommentListDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentList: {
				entities: {
					"1": {
						id: "1",
						text: "test1"
					},
					"2": {
						id: "2",
						text: "test2"
					}
				},
				ids: ["1", "2"]
			}
		}
		expect(getCommentListDataSelector(state as mainStateMap)).toEqual([
			{
				id: "1",
				text: "test1"
			},
			{
				id: "2",
				text: "test2"
			}
		])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}

		expect(getCommentListDataSelector(state as mainStateMap)).toEqual([])
	})
})
