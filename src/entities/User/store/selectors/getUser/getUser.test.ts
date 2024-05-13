import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserSelector } from "./getUser.selector"

describe("getUserSelectorTest", () => {
	test("Getting user from mainStat", () => {
		const state: Partial<mainStateMap> = { user: { authData: { userName: "123", id: "1" } } }
		expect(getUserSelector(state as mainStateMap)).toEqual({
			authData: { userName: "123", id: "1" }
		})
	})
})
