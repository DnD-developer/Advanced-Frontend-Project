import type { userDataType } from "@entities/User"
import { userActions } from "@entities/User"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { errorResponseType, thunkConfigType } from "@store/storeTypes/thunks.type"
import type { loginByUserNameDataType } from "../../../types/loginByUserNameData.type"
import type { loginByUserNameError } from "../../../types/loginByUserNameError.type"

export const loginByUserNameThunk = createAsyncThunk<
	userDataType,
	loginByUserNameDataType,
	thunkConfigType<loginByUserNameError>
>("login/loginByUserName", async (loginByUserNameData, thunkAPI) => {
	const { dispatch, extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.post<userDataType>("/login", loginByUserNameData)

		const { setAuthData } = userActions
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
