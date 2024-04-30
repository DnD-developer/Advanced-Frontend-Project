import { mainStateMap } from "@app/store"
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
})
