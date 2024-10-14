import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getAddArticleCommentIsLoadingSelector } from "./getAddArticleCommentIsLoading.selector"

describe("getAddArticleCommentIsLoadingSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			addArticleComment: { text: "1", isLoading: true }
		}
		expect(getAddArticleCommentIsLoadingSelector()(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getAddArticleCommentIsLoadingSelector()(state as mainStateMap)).toEqual(false)
	})
})
