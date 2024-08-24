import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getEditableProfileCardSelector } from "./getEditableProfileCard.selector"

describe("getEditableProfileCardSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			editableProfileCard: {
				isLoading: false
			}
		}
		expect(getEditableProfileCardSelector(state as mainStateMap)).toEqual({
			isLoading: false
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getEditableProfileCardSelector(state as mainStateMap)).toEqual(undefined)
	})
})
