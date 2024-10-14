import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { UserRoles } from "../../../constants/userRoles.constant"
import { getUserAuthDataSelector } from "./getUserAuthData.selector"
import { userDataMock } from "../../../lib/mocks/userData.mock"

describe("getUserAuthDataSelectorTest", () => {
	test("with state", () => {
		const state: Partial<mainStateMap> = {
			user: {
				authData: userDataMock({
					userName: "123",
					id: "1",
					roles: [UserRoles.ADMIN]
				}),
				_initAuthData: false
			}
		}
		expect(getUserAuthDataSelector(state as mainStateMap)).toEqual(
			userDataMock({
				userName: "123",
				id: "1",
				roles: [UserRoles.ADMIN]
			})
		)
	})

	test("withOut state", () => {
		const state: Partial<mainStateMap> = {}
		expect(getUserAuthDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
