import { DeepPartial } from "@customTypes/global.types"
import { ServerErrors } from "@entities/Profile"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getEditableProfileCardErrorSelector } from "./getEditableProfileCardError.selector"

describe("getEditableProfileCardErrorSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			editableProfileCard: {
				errors: [ServerErrors.SERVER_NOT_FOUND]
			}
		}
		expect(getEditableProfileCardErrorSelector(state as mainStateMap)).toEqual([
			ServerErrors.SERVER_NOT_FOUND
		])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getEditableProfileCardErrorSelector(state as mainStateMap)).toEqual(undefined)
	})
})
