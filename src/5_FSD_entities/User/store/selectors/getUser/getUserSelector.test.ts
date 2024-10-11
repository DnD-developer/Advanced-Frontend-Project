import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { UserRoles } from "../../../constants/userRoles.constant"
import { getUserSelector } from "./getUser.selector"
import { userDataMock } from "../../../lib/mocks/userData.mock"

describe("getUserSelectorTest", () => {
	test("with state", () => {
		const state: Partial<mainStateMap> = {
			user: {
				authData: userDataMock({ userName: "123", id: "1", roles: [UserRoles.ADMIN] }),
				_initAuthData: false
			}
		}
		expect(getUserSelector(state as mainStateMap)).toEqual({
			authData: userDataMock({ userName: "123", id: "1", roles: [UserRoles.ADMIN] }),
			_initAuthData: false
		})
	})

	test("withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserSelector(state as mainStateMap)).toEqual(undefined)
	})
})
