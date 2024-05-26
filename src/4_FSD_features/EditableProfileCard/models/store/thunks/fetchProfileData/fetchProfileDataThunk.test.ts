import { Country } from "@entities/Country"
import { Currency } from "@entities/Currency"
import { profileDataType, profileStateMap, ServerErrors } from "@entities/Profile"
import { beforeEach, describe, expect, test } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { fetchProfileDataThunk } from "./fetchProfileData.thunk"

let thunk: AsyncThunkMock<profileDataType, undefined, thunkConfigType<profileStateMap["errors"]>>

let profileDataValue: profileDataType

let mockedGet: (typeof AsyncThunkMock<
	profileDataType,
	undefined,
	thunkConfigType<profileStateMap["errors"]>
>)["prototype"]["api"]["get"]

describe("fetchProfileDataThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(fetchProfileDataThunk)
		mockedGet = thunk.api.get
	})

	test("getting profileData fullFilled", async () => {
		profileDataValue = {
			avatar: "https://i.pinimg.com/originals/0d/cb/1f/0dcb1f45db2d5a624e5da74b74f3ddb9.png",
			firstName: "Lucifer",
			lastName: "Morningstar",
			age: 25,
			currency: Currency.EUR,
			country: Country.Belarus,
			city: "Fryazino",
			userName: "Lucifer"
		}

		mockedGet.mockReturnValue(Promise.resolve({ data: profileDataValue }))

		const result = await thunk.callThunk(undefined)

		expect(mockedGet).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(profileDataValue)
	})

	test("getting profileData rejected", async () => {
		mockedGet.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk(undefined)

		expect(mockedGet).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual([ServerErrors.SERVER_NOT_FOUND])
	})
})
