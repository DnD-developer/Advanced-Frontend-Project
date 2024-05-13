import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { profileDataType } from "../../storeTypes/profileData.type"

export const fetchProfileDataThunk = createAsyncThunk<
	profileDataType,
	undefined,
	thunkConfigType<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get<profileDataType>("/profile")

		return response.data
	} catch (error) {
		return rejectWithValue(error.message)
	}
})
