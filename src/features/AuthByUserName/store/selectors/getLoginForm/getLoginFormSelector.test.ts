import { mainStateMap } from "@app/store"
import { getLoginFormSelector } from "./getLoginForm.selector"

describe("getLoginFormSelectorTest", () => {
	test("Getting loginForm from mainStat", () => {
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
		expect(getLoginFormSelector(state as mainStateMap)).toEqual({
			isLoading: true,
			data: {
				userName: "",
				password: ""
			},
			error: {
				noUser: true,
				otherError: ""
			}
		})
	})
})
