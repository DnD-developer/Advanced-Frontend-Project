import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentListSelector } from "./getCommentList.selector"

describe(getCommentListSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentList: {
				isLoading: false
			}
		}
		expect(getCommentListSelector(state as mainStateMap)).toEqual({
			isLoading: false
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCommentListSelector(state as mainStateMap)).toEqual(undefined)
	})
})
