import { profileDataType, profileStateMap, ServerErrors } from "@entities/Profile"
import { validateErrors } from "@entities/Profile/lib/helpers/validateErrors/validateErrors"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getEditableProfileCardFormDataSelector } from "../../selectors/getEditableProfileCardFormData/getEditableProfileCardFormData.selector"

export const postProfileDataThunk = createAsyncThunk<
	profileDataType,
	profileDataType["id"],
	thunkConfigType<profileStateMap["errors"]>
>("profile/postProfileData", async (id, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI
	try {
		const formData = getEditableProfileCardFormDataSelector(getState())

		const errors = validateErrors(formData)

		if (errors.length > 0) {
			return rejectWithValue(errors)
		}

		const data: profileDataType = { ...formData, id }

		if (__PROJECT__ === "storybook") {
			return data || {}
		}

		const response = await extra.api.put<profileDataType>(`/profile/${id}`, data)

		return response.data
	} catch {
		return rejectWithValue([ServerErrors.SERVER_NOT_FOUND])
	}
})
