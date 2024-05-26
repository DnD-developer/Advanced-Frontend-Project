import { userActions, userDataType } from "@entities/User"
import { beforeEach, describe, expect, test } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { loginFormActions } from "../../slices/loginForm.slice"
import { loginByUserNameDataType } from "../../storeTypes/loginByUserNameData.type"
import { loginByUserNameError } from "../../storeTypes/loginByUserNameError.type"
import { loginByUserNameThunk } from "./loginByUserName.thunk"

const { setAuthData } = userActions
const { resetForm } = loginFormActions

let thunk: AsyncThunkMock<
	userDataType,
	loginByUserNameDataType,
	thunkConfigType<loginByUserNameError>
>

let userValue: userDataType

let mockedPost: (typeof AsyncThunkMock<
	userDataType,
	loginByUserNameDataType,
	thunkConfigType<loginByUserNameError>
>)["prototype"]["api"]["post"]

describe("loginByUserNameThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(loginByUserNameThunk)
		mockedPost = thunk.api.post
	})

	test("getting authData fullFilled", async () => {
		userValue = { id: "1", userName: "adminTest" }

		mockedPost.mockReturnValue(Promise.resolve({ data: userValue }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "123" })

		expect(mockedPost).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(thunk.dispatch).toBeCalledTimes(4)
		expect(thunk.dispatch).toBeCalledWith(setAuthData(userValue))
		expect(thunk.dispatch).toBeCalledWith(resetForm())
		expect(result.payload).toEqual(userValue)
	})

	test("getting authData rejected noUser", async () => {
		mockedPost.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "password" })

		expect(mockedPost).toBeCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(thunk.dispatch).toBeCalledTimes(2)
		expect(thunk.dispatch).not.toBeCalledWith(setAuthData(userValue))
		expect(thunk.dispatch).not.toBeCalledWith(resetForm())
		expect(result.payload).toEqual({ noUser: true })
	})

	test("getting authData rejected other error", async () => {
		const errorText = "somethingError"

		mockedPost.mockReturnValue(Promise.reject({ message: errorText }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "" })

		expect(mockedPost).toBeCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(thunk.dispatch).toBeCalledTimes(2)
		expect(thunk.dispatch).not.toBeCalledWith(setAuthData(userValue))
		expect(thunk.dispatch).not.toBeCalledWith(resetForm())
		expect(result.payload).toEqual({ otherError: errorText })
	})
})
