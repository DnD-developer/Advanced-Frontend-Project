import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentListErrorSelector } from "./getCommentListError.selector"

describe(getCommentListErrorSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentList: { error: "error" }
		}
		expect(getCommentListErrorSelector(state as mainStateMap)).toBe("error")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCommentListErrorSelector(state as mainStateMap)).toBe("")
	})
})
