import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserSelector } from "./getUser.selector"

describe("getUserSelectorTest", () => {
	test("getting user from mainState", () => {
		const state: Partial<mainStateMap> = {
			user: { authData: { userName: "123", id: "1" }, _initAuthData: false }
		}
		expect(getUserSelector(state as mainStateMap)).toEqual({
			authData: { userName: "123", id: "1" },
			_initAuthData: false
		})
	})

	test("getting user withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserSelector(state as mainStateMap)).toEqual(undefined)
	})
})
