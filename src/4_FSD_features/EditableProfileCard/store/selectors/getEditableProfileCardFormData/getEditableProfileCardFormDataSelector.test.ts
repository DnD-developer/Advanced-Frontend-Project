import { DeepPartial } from "@customTypes/global.types"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getEditableProfileCardFormDataSelector } from "./getEditableProfileCardFormData.selector"

describe("getEditableProfileCardFormDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			editableProfileCard: {
				formData: {
					userName: "Test"
				}
			}
		}
		expect(getEditableProfileCardFormDataSelector(state as mainStateMap)).toEqual({
			userName: "Test"
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getEditableProfileCardFormDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
