import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getAddArticleCommentSelector } from "./getAddArticleComment.selector"

describe(getAddArticleCommentSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			addArticleComment: { isLoading: false }
		}
		expect(getAddArticleCommentSelector(state as mainStateMap)).toEqual({ isLoading: false })
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getAddArticleCommentSelector(state as mainStateMap)).toEqual(undefined)
	})
})
