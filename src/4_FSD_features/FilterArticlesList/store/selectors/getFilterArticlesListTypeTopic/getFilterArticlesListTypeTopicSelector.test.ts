import { DeepPartial } from "@customTypes/global.types"
import { ArticleTypeConstant } from "@entities/Article/constants/Article.constant"
import { describe, expect, test } from "@jest/globals"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFilterArticlesListTypeTopicSelector } from "./getFilterArticlesListTypeTopic.selector"

describe(getFilterArticlesListTypeTopicSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			filterArticlesList: { typeTopic: ArticleTypeConstant.IT }
		}
		expect(getFilterArticlesListTypeTopicSelector(state as mainStateMap)).toBe("IT")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFilterArticlesListTypeTopicSelector(state as mainStateMap)).toBe("ALL")
	})
})
