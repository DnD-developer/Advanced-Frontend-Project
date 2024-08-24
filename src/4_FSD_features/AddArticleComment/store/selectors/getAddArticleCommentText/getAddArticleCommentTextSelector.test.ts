import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getAddArticleCommentTextSelector } from "./getAddArticleCommentTextSelector"

describe(getAddArticleCommentTextSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			addArticleComment: { text: "txt" }
		}
		expect(getAddArticleCommentTextSelector(state as mainStateMap)).toBe("txt")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getAddArticleCommentTextSelector(state as mainStateMap)).toBe("")
	})
})
