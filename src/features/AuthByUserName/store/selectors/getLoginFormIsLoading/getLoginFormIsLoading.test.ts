import { mainStateMap } from "@app/store"
import { getLoginFormIsLoadingSelector } from "./getLoginFormIsLoading.selector"

describe("getLoginFormIsLoadingSelectorTest", () => {
	test("Getting loginFormIsLoading from mainStat", () => {
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
		expect(getLoginFormIsLoadingSelector(state as mainStateMap)).toBe(true)
	})
})
