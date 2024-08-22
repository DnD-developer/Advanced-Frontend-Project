import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserInitAuthDataSelector } from "./getUserInitAuthData.selector"

describe("getUserInitAuthDataSelectorTest", () => {
	test("with state", () => {
		const state: Partial<mainStateMap> = {
			user: {
				_initAuthData: false
			}
		}
		expect(getUserInitAuthDataSelector(state as mainStateMap)).toBe(false)
	})

	test("withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserInitAuthDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
