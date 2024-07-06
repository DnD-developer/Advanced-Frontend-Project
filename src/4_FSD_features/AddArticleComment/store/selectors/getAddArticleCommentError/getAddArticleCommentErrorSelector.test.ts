import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getAddArticleCommentErrorSelector } from "./getAddArticleCommentError.selector"

describe(getAddArticleCommentErrorSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			addArticleComment: { error: "test" }
		}
		expect(getAddArticleCommentErrorSelector(state as mainStateMap)).toBe("test")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getAddArticleCommentErrorSelector(state as mainStateMap)).toEqual(undefined)
	})
})
