import { beforeEach, describe, expect, test } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { profileDataType } from "../../types/profileData.type"
import { profileStateMap, ServerErrors } from "../storeTypes/profileState.map"
import { fetchProfileDataThunk } from "./fetchProfileData.thunk"

let thunk: AsyncThunkMock<
	profileDataType,
	profileDataType["id"],
	thunkConfigType<profileStateMap["errors"]>
>

let profileDataValue: profileDataType

let mockedGet: (typeof AsyncThunkMock<
	profileDataType,
	profileDataType["id"],
	thunkConfigType<profileStateMap["errors"]>
>)["prototype"]["api"]["get"]

describe("fetchProfileDataThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(fetchProfileDataThunk)
		mockedGet = thunk.api.get
	})

	test("getting profileData fullFilled", async () => {
		profileDataValue = {
			id: "1",
			avatar: "https://i.pinimg.com/originals/0d/cb/1f/0dcb1f45db2d5a624e5da74b74f3ddb9.png",
			firstName: "Lucifer",
			lastName: "Morningstar",
			age: 25,
			currency: undefined,
			country: undefined,
			city: "Fryazino",
			userName: "Lucifer"
		}

		mockedGet.mockReturnValue(Promise.resolve({ data: profileDataValue }))

		const result = await thunk.callThunk("1")

		expect(mockedGet).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(profileDataValue)
	})

	test("getting profileData rejected SERVER_NOT_FOUND", async () => {
		mockedGet.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk("1")

		expect(mockedGet).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual([ServerErrors.SERVER_NOT_FOUND])
	})

	test("getting profileData rejected PROFILE_NOT_FOUND", async () => {
		mockedGet.mockReturnValue(Promise.resolve({ data: null }))

		const result = await thunk.callThunk(undefined as unknown as string)

		expect(mockedGet).not.toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual([ServerErrors.PROFILE_NOT_FOUND])
	})
})
