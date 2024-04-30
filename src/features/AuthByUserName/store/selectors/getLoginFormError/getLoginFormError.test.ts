import { mainStateMap } from "@app/store"
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
})
