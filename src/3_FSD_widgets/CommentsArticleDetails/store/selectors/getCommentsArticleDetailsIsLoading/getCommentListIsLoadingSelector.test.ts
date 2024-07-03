import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCommentsArticleDetailsIsLoadingSelector } from "./getCommentsArticleDetailsIsLoading.selector"

describe(getCommentsArticleDetailsIsLoadingSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			commentsArticleDetails: {
				isLoading: true
			}
		}
		expect(getCommentsArticleDetailsIsLoadingSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCommentsArticleDetailsIsLoadingSelector(state as mainStateMap)).toBe(false)
	})
})
