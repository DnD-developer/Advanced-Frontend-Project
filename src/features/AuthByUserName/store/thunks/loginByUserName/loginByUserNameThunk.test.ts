import { userActions, userData } from "@entities/User"
import { TestAsyncThunk } from "@helpers/tests/TestAsyncThunk"
import { expect } from "@storybook/test"
import axios from "axios"
import { loginFormActions } from "../../slices/loginForm.slice"
import { loginByUserNameDataType } from "../../storeTypes/loginByUserNameData.type"
import { loginByUserNameError } from "../../storeTypes/loginByUserNameError.type"
import { loginByUserNameThunk } from "./loginByUserName.thunk"

jest.mock("axios")

const mockedAxios = jest.mocked(axios)

const { setAuthData } = userActions
const { resetForm } = loginFormActions

let thunk: TestAsyncThunk<userData, loginByUserNameDataType, { rejectValue: loginByUserNameError }>

describe("loginByUserNameThunkTest", () => {
	beforeEach(() => {
		thunk = new TestAsyncThunk(loginByUserNameThunk)
	})

	test("Getting AuthData Fulfilled", async () => {
		const userValue = { id: "1", userName: "adminTest" }

		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "123" })

		await expect(mockedAxios.post).toHaveBeenCalled()
		await expect(result.meta.requestStatus).toBe("fulfilled")
		await expect(thunk.dispatch).toBeCalledTimes(4)
		await expect(thunk.dispatch).toBeCalledWith(setAuthData(userValue))
		await expect(thunk.dispatch).toBeCalledWith(resetForm())
		await expect(result.payload).toEqual(userValue)
	})

	test("Getting AuthData Rejected noUser", async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: {}, status: 403 }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "password" })

		await expect(mockedAxios.post).toHaveBeenCalled()
		await expect(result.meta.requestStatus).toBe("rejected")
		await expect(thunk.dispatch).toBeCalledTimes(2)
		await expect(thunk.dispatch).not.toHaveBeenCalledWith(setAuthData())
		await expect(thunk.dispatch).not.toBeCalledWith(resetForm())
		await expect(result.payload).toEqual({ noUser: true })
	})

	test("Getting AuthData Rejected Other Error", async () => {
		const errorText = "somethingError"

		mockedAxios.post.mockReturnValue(Promise.reject({ message: errorText }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "" })

		await expect(mockedAxios.post).toHaveBeenCalled()
		await expect(result.meta.requestStatus).toBe("rejected")
		await expect(thunk.dispatch).toBeCalledTimes(2)
		await expect(thunk.dispatch).not.toHaveBeenCalledWith(setAuthData())
		await expect(thunk.dispatch).not.toBeCalledWith(resetForm())
		await expect(result.payload).toEqual({ otherError: errorText })
	})
})
