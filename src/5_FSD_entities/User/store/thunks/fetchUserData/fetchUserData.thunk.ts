import type { userDataType } from "../../../types/userData.type"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getUserRtkq } from "../../../api/user.rtkq"
import type { userStateMap } from "../../storeTypes/userState.map"
import { USER_TOKEN } from "@constants/localStorage.constant"

export const fetchUserDataThunk = createAsyncThunk<
	userDataType,
	undefined,
	thunkConfigType<userStateMap["error"]>
>("user/fetchUserDataThunk", async (_, thunkAPI) => {
	const { dispatch, rejectWithValue } = thunkAPI
	try {
		const userToken = localStorage.getItem(USER_TOKEN)

		if (!userToken) {
			return rejectWithValue("User ID is required")
		}

		const response = await dispatch(getUserRtkq(userToken)).unwrap()

		return response
	} catch {
		return rejectWithValue("errorWithRequest")
	}
})
