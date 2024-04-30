import { userActions, userData } from "@entities/User"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { loginFormActions } from "../../slices/loginForm.slice"
import { loginByUserNameDataType } from "../../storeTypes/loginByUserNameData.type"
import { loginByUserNameError } from "../../storeTypes/loginByUserNameError.type"

export const loginByUserNameThunk = createAsyncThunk<
	userData,
	loginByUserNameDataType,
	{ rejectValue: loginByUserNameError }
>("login/loginByUserName", async (loginByUserNameData, thunkAPI) => {
	try {
		const response = await axios.post<userData>(
			"http://localhost:8000/login",
			loginByUserNameData
		)

		if (!response.data) {
			return thunkAPI.rejectWithValue({ noUser: true })
		}

		const { setAuthData } = userActions
		const { resetForm } = loginFormActions

		thunkAPI.dispatch(setAuthData(response.data))
		thunkAPI.dispatch(resetForm())
	} catch (error) {
		return thunkAPI.rejectWithValue({ otherError: error.message })
	}
})
