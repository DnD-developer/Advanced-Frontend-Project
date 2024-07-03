import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentsArticleDetailsErrorSelector } from "./getCommentsArticleDetailsError.selector"

describe(getCommentsArticleDetailsErrorSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentsArticleDetails: { error: "error" }
		}
		expect(getCommentsArticleDetailsErrorSelector(state as mainStateMap)).toBe("error")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCommentsArticleDetailsErrorSelector(state as mainStateMap)).toBe("")
	})
})
