import { mainStateMap } from "@app/store"
import { getLoginFormDataSelector } from "./getLoginFormData.selector"

describe("getLoginFormDataSelectorTest", () => {
	test("Getting loginFormData from mainStat", () => {
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
		expect(getLoginFormDataSelector(state as mainStateMap)).toEqual({
			userName: "",
			password: ""
		})
	})
})
