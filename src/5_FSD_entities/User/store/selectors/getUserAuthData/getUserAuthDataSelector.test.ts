import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserAuthDataSelector } from "./getUserAuthData.selector"

describe("getUserAuthDataSelectorTest", () => {
	test("with state", () => {
		const state: Partial<mainStateMap> = {
			user: {
				authData: {
					userName: "123",
					id: "1"
				},
				_initAuthData: false
			}
		}
		expect(getUserAuthDataSelector(state as mainStateMap)).toEqual({ userName: "123", id: "1" })
	})

	test("withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserAuthDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
