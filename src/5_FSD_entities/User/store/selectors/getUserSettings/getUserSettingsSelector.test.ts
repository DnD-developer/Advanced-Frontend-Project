import { describe, expect, test } from "@jest/globals"
import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserSettingsSelector, getUserSettingByKeySelector } from "./getUserSettings.selector"
import { THEMES } from "@sharedProviders/ThemeProvider"

describe("getUserSettingsSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			user: {
				authData: {
					settings: {
						theme: THEMES.GREEN
					}
				}
			}
		}
		expect(getUserSettingsSelector()(state as mainStateMap)).toEqual({
			theme: THEMES.GREEN
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getUserSettingsSelector()(state as mainStateMap)).toEqual(undefined)
	})
})

describe("getUserSettingByKeySelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			user: {
				authData: {
					settings: {
						theme: THEMES.GREEN
					}
				}
			}
		}
		expect(getUserSettingByKeySelector("theme")(state as mainStateMap)).toBe(THEMES.GREEN)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getUserSettingByKeySelector("theme")(state as mainStateMap)).toBe(undefined)
	})
})
