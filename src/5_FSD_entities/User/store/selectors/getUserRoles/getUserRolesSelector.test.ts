import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { UserRoles } from "../../../constants/userRoles.constant"
import { getUserRolesSelector } from "./getUserRoles.selector"

describe(getUserRolesSelector, () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			user: { authData: { roles: [UserRoles.ADMIN] } }
		}
		expect(getUserRolesSelector(state as mainStateMap)).toEqual([UserRoles.ADMIN])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getUserRolesSelector(state as mainStateMap)).toEqual(undefined)
	})
})
