import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { UserRoles } from "../../../constants/userRoles.constant"
import { getUserSelector } from "./getUser.selector"

describe("getUserSelectorTest", () => {
	test("with state", () => {
		const state: Partial<mainStateMap> = {
			user: {
				authData: { userName: "123", id: "1", roles: [UserRoles.ADMIN] },
				_initAuthData: false
			}
		}
		expect(getUserSelector(state as mainStateMap)).toEqual({
			authData: { userName: "123", id: "1", roles: [UserRoles.ADMIN] },
			_initAuthData: false
		})
	})

	test("withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserSelector(state as mainStateMap)).toEqual(undefined)
	})
})
