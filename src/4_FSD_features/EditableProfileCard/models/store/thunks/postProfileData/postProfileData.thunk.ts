import { profileDataType, profileStateMap, ServerErrors } from "@entities/Profile"
import { validateErrors } from "@entities/Profile/models/services/validateErrors/validateErrors"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getEditableProfileCardFormDataSelector } from "../../selectors/getEditableProfileCardFormData/getEditableProfileCardFormData.selector"

export const postProfileDataThunk = createAsyncThunk<
	profileDataType,
	undefined,
	thunkConfigType<profileStateMap["errors"]>
>("profile/postProfileData", async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI
	try {
		const formData = getEditableProfileCardFormDataSelector(getState())

		const errors = validateErrors(formData)

		if (errors.length > 0) {
			return rejectWithValue(errors)
		}

		if (__PROJECT__ === "storybook") {
			return formData || {}
		}

		const response = await extra.api.put<profileDataType>("/profile", formData)

		return response.data
	} catch {
		return rejectWithValue([ServerErrors.SERVER_NOT_FOUND])
	}
})
