import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getLoginFormUserNameSelector } from "./getLoginFormUserName.selector"

describe("getLoginFormUserNameSelectorTest", () => {
	test("Getting loginFormDataUserName from mainStat", () => {
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
		expect(getLoginFormUserNameSelector(state as mainStateMap)).toBe("")
	})

	test("Without State", () => {
		const state: Partial<mainStateMap> = {}

		expect(getLoginFormUserNameSelector(state as mainStateMap)).toBe("")
	})
})
