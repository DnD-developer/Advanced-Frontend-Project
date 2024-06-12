import { DeepPartial } from "@customTypes/global.types"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getEditableProfileCardIsLoadingSelector } from "./getEditableProfileCardIsLoading.selector"

describe("getEditableProfileCardIsLoadingSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			editableProfileCard: {
				isLoading: true
			}
		}
		expect(getEditableProfileCardIsLoadingSelector(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getEditableProfileCardIsLoadingSelector(state as mainStateMap)).toBe(false)
	})
})
