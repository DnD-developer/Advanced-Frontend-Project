import { PagesPaths } from "@constants/common.constant"
import { describe, expect, test } from "@jest/globals"
import { addIdInPagePath } from "./addIdInPagePath.helper"

describe("addIdInPagePathHelperTest", () => {
	test("success change", () => {
		const result = addIdInPagePath(PagesPaths.ARTICLE_DETAILS, 1)

		expect(result).toBe("/articles/1")
	})
})
