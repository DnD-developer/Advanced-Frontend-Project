import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getLoginFormErrorSelector } from "./getLoginFormError.selector"

describe("getLoginFormErrorSelectorTest", () => {
	test("Getting loginFormError from mainStat", () => {
		const state: Partial<mainStateMap> = {
			loginForm: {
				isLoading: true,
				data: {
					userName: "",
					password: ""
				},
				error: {
					noUser: true,
					otherError: ""
				}
			}
		}
		expect(getLoginFormErrorSelector(state as mainStateMap)).toEqual({
			noUser: true,
			otherError: ""
		})
	})

	test("WithOut State", () => {
		const state: Partial<mainStateMap> = {}

		expect(getLoginFormErrorSelector(state as mainStateMap)).toEqual(undefined)
	})
})
