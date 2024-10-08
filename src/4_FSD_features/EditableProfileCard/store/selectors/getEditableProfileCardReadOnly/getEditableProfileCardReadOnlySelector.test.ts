import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getEditableProfileCardReadOnlySelector } from "./geEditableProfileCardReadOnly.selector"

describe("getEditableProfileCardIsLoadingSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			editableProfileCard: {
				readOnly: true
			}
		}
		expect(getEditableProfileCardReadOnlySelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getEditableProfileCardReadOnlySelector(state as mainStateMap)).toBe(false)
	})
})
