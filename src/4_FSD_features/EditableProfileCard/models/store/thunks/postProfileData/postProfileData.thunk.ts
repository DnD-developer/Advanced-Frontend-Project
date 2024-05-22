import { profileDataType } from "@entities/Profile"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { errorResponseType, thunkConfigType } from "@store/storeTypes/thunks.type"
import { getEditableProfileCardFormDataSelector } from "../../selectors/getEditableProfileCardFormData/getEditableProfileCardFormData.selector"

export const postProfileDataThunk = createAsyncThunk<
	profileDataType,
	undefined,
	thunkConfigType<string>
>("profile/postProfileData", async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI
	try {
		const formData = getEditableProfileCardFormDataSelector(getState())
		const response = await extra.api.put<profileDataType>("/profile", formData)

		return response.data
	} catch (error) {
		const errorCustom = error as errorResponseType

		return rejectWithValue(errorCustom?.message || "")
	}
})
