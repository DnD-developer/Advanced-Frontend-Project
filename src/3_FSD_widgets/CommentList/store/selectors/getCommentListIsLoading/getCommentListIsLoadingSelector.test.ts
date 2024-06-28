import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentListIsLoadingSelector } from "./getCommentListIsLoading.selector"

describe(getCommentListIsLoadingSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentList: {
				isLoading: true
			}
		}
		expect(getCommentListIsLoadingSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCommentListIsLoadingSelector(state as mainStateMap)).toBe(false)
	})
})
