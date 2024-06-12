import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { profileDataType } from "../../types/profileData.type"
import { profileStateMap, ServerErrors } from "../storeTypes/profileState.map"

export const fetchProfileDataThunk = createAsyncThunk<
	profileDataType,
	undefined,
	thunkConfigType<profileStateMap["errors"]>
>("profile/fetchProfileData", async (_, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get<profileDataType>("/profile")
		return response.data
	} catch {
		return rejectWithValue([ServerErrors.SERVER_NOT_FOUND])
	}
})
