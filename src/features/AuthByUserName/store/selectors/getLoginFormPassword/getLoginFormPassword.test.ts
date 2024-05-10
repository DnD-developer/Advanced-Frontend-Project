import { mainStateMap } from "@app/store"
import { getLoginFormPasswordSelector } from "./getLoginFormPassword.selector"

describe("getLoginFormPasswordSelectorTest", () => {
	test("Getting loginFormDataPassword from mainStat", () => {
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
		expect(getLoginFormPasswordSelector(state as mainStateMap)).toBe("")
	})

	test("Without state", () => {
		const state: Partial<mainStateMap> = {}

		expect(getLoginFormPasswordSelector(state as mainStateMap)).toBe("")
	})
})
