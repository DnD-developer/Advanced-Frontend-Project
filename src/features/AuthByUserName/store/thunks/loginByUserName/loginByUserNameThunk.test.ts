import { userActions, userDataType } from "@entities/User"
import { TestAsyncThunk } from "@mocks/TestAsyncThunk"
import { thunkConfigType, thunkExtraType } from "@store/storeTypes/thunks.type"
import { expect } from "@storybook/test"
import { loginFormActions } from "../../slices/loginForm.slice"
import { loginByUserNameDataType } from "../../storeTypes/loginByUserNameData.type"
import { loginByUserNameError } from "../../storeTypes/loginByUserNameError.type"
import { loginByUserNameThunk } from "./loginByUserName.thunk"

const mockedExtra = {
	api: {
		post: jest.fn()
	}
}
const mockedPost = mockedExtra.api.post

const { setAuthData } = userActions
const { resetForm } = loginFormActions

let thunk: TestAsyncThunk<
	userDataType,
	loginByUserNameDataType,
	thunkConfigType<loginByUserNameError>
>

describe("loginByUserNameThunkTest", () => {
	beforeEach(() => {
		thunk = new TestAsyncThunk(loginByUserNameThunk, mockedExtra as unknown as thunkExtraType)
	})

	test("Getting AuthData Fulfilled", async () => {
		const userValue = { id: "1", userName: "adminTest" }

		mockedPost.mockReturnValue(Promise.resolve({ data: userValue }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "123" })

		await expect(mockedPost).toHaveBeenCalled()
		await expect(result.meta.requestStatus).toBe("fulfilled")
		await expect(thunk.dispatch).toBeCalledTimes(4)
		await expect(thunk.dispatch).toBeCalledWith(setAuthData(userValue))
		await expect(thunk.dispatch).toBeCalledWith(resetForm())
		await expect(result.payload).toEqual(userValue)
	})

	test("Getting AuthData Rejected noUser", async () => {
		mockedPost.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "password" })

		await expect(mockedPost).toHaveBeenCalled()
		await expect(result.meta.requestStatus).toBe("rejected")
		await expect(thunk.dispatch).toBeCalledTimes(2)
		await expect(thunk.dispatch).not.toHaveBeenCalledWith(setAuthData())
		await expect(thunk.dispatch).not.toBeCalledWith(resetForm())
		await expect(result.payload).toEqual({ noUser: true })
	})

	test("Getting AuthData Rejected Other Error", async () => {
		const errorText = "somethingError"

		mockedPost.mockReturnValue(Promise.reject({ message: errorText }))

		const result = await thunk.callThunk({ userName: "adminTest", password: "" })

		await expect(mockedPost).toHaveBeenCalled()
		await expect(result.meta.requestStatus).toBe("rejected")
		await expect(thunk.dispatch).toBeCalledTimes(2)
		await expect(thunk.dispatch).not.toHaveBeenCalledWith(setAuthData())
		await expect(thunk.dispatch).not.toBeCalledWith(resetForm())
		await expect(result.payload).toEqual({ otherError: errorText })
	})
})
