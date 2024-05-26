import { userActions, userDataType } from "@entities/User"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { errorResponseType, thunkConfigType } from "@store/storeTypes/thunks.type"
import { loginFormActions } from "../../slices/loginForm.slice"
import { loginByUserNameDataType } from "../../storeTypes/loginByUserNameData.type"
import { loginByUserNameError } from "../../storeTypes/loginByUserNameError.type"

export const loginByUserNameThunk = createAsyncThunk<
	userDataType,
	loginByUserNameDataType,
	thunkConfigType<loginByUserNameError>
>("login/loginByUserName", async (loginByUserNameData, thunkAPI) => {
	const { dispatch, extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.post<userDataType>("/login", loginByUserNameData)

		const { setAuthData } = userActions
		const { resetForm } = loginFormActions

		dispatch(resetForm())
		dispatch(setAuthData(response.data))

		return response.data
	} catch (error) {
		const errorCustom = error as errorResponseType

		if (errorCustom?.response?.status === 403) {
			return rejectWithValue({ noUser: true })
		}
		return rejectWithValue({ otherError: errorCustom.message })
	}
})
