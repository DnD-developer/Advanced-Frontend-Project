import { mainStateMap } from "@store/storeTypes/mainState.map"
import { getUserAuthDataSelector } from "./getUserAuthData.selector"

describe("getUserAuthDataSelectorTest", () => {
	test("Getting userAuthData from mainStat", () => {
		const state: Partial<mainStateMap> = {
			user: {
				authData: {
					userName: "123",
					id: "1"
				}
			}
		}
		expect(getUserAuthDataSelector(state as mainStateMap)).toEqual({ userName: "123", id: "1" })
	})
})
