import { describe, expect, test } from "@jest/globals"
import { classNamesHelp } from "./classNamesHelp"

describe("Test Helper classNamesHelp", () => {
	test("one Class", () => {
		expect(classNamesHelp("firstClass")).toBe("firstClass")
	})

	test("two Classes", () => {
		const expectValue = classNamesHelp("firstClass", {}, ["secondClass"])
		expect(expectValue).toBe("firstClass secondClass")
	})

	test("Classes with mods", () => {
		const expectValue = classNamesHelp("firstClass", { modsClass: true }, ["secondClass"])

		expect(expectValue).toBe("firstClass secondClass modsClass")
	})

	test("Classes with mods with false", () => {
		const expectValue = classNamesHelp(
			"firstClass",
			{ modsClass: true, modsFailClass: false },
			["secondClass"]
		)

		expect(expectValue).toBe("firstClass secondClass modsClass")
	})

	test("Classes with mods with undefined", () => {
		const expectValue = classNamesHelp(
			"firstClass",
			{ modsClass: true, modsFailClass: undefined },
			["secondClass"]
		)

		expect(expectValue).toBe("firstClass secondClass modsClass")
	})
})
