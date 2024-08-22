import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { profileDataType } from "../../types/profileData.type"
import { profileStateMap, ServerErrors } from "../storeTypes/profileState.map"

export const fetchProfileDataThunk = createAsyncThunk<
	profileDataType,
	profileDataType["id"],
	thunkConfigType<profileStateMap["errors"]>
>("profile/fetchProfileData", async (id, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		if (!id) {
			return rejectWithValue([ServerErrors.PROFILE_NOT_FOUND])
		}

		const response = await extra.api.get<profileDataType>(`profile/${id}`)

		return response.data
	} catch {
		return rejectWithValue([ServerErrors.SERVER_NOT_FOUND])
	}
})
