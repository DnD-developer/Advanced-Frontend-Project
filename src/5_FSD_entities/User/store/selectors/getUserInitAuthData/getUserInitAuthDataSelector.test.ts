import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserInitAuthDataSelector } from "./getUserInitAuthData.selector"

describe("getUserInitAuthDataSelectorTest", () => {
	test("getting userInitAuthData from mainState", () => {
		const state: Partial<mainStateMap> = {
			user: {
				_initAuthData: false
			}
		}
		expect(getUserInitAuthDataSelector(state as mainStateMap)).toBe(false)
	})

	test("getting userAuthData withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserInitAuthDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
