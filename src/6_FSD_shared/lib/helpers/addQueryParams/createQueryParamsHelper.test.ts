import { describe, expect, test } from "@jest/globals"
import { createQueryParams } from "./addQueryParams.helper"

describe("createQueryParamsHelperTest", () => {
	test("1 param", () => {
		const result = createQueryParams({ expand: "etg" })

		expect(result).toBe("?expand=etg")
	})

	test("2 param", () => {
		const result = createQueryParams({ expand: "etg", name: "Luc" })

		expect(result).toBe("?expand=etg&name=Luc")
	})
})
