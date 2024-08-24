import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentsArticleDetailsDataSelector } from "./getCommentsArticleDetailsDataSelector"

describe("getCommentListDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentsArticleDetails: {
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
		expect(getCommentsArticleDetailsDataSelector(state as mainStateMap)).toEqual([
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

		expect(getCommentsArticleDetailsDataSelector(state as mainStateMap)).toEqual([])
	})
})
