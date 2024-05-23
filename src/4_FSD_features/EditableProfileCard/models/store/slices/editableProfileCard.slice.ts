import { mappingErrors, profileDataType } from "@entities/Profile"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { editableProfileStateMap } from "../storeTypes/editableProfileState.map"
import { fetchProfileDataThunk } from "../thunks/fetchProfileData/fetchProfileData.thunk"
import { postProfileDataThunk } from "../thunks/postProfileData/postProfileData.thunk"

const initialState: editableProfileStateMap = {
	isLoading: false,
	data: undefined,
	formData: undefined,
	readOnly: true,
	errors: undefined
}

const editableProfileCardSlice = createSlice({
	name: "editableProfileSlice",
	initialState,
	reducers: {
		setReadOnly(state: editableProfileStateMap, action: PayloadAction<boolean>) {
			state.readOnly = action.payload
		},
		resetForm(state: editableProfileStateMap) {
			state.formData = state.data
			state.readOnly = true
			state.errors = undefined
		},
		updateForm(state: editableProfileStateMap, action: PayloadAction<profileDataType>) {
			state.formData = {
				...state.formData,
				...action.payload
			}
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProfileDataThunk.pending, state => {
				state.isLoading = true
				state.errors = undefined
			})
			.addCase(fetchProfileDataThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.errors = undefined
				state.data = action.payload
				state.formData = action.payload
			})
			.addCase(fetchProfileDataThunk.rejected, (state, action) => {
				state.isLoading = false
				state.errors = action.payload
			})
			.addCase(postProfileDataThunk.pending, state => {
				state.isLoading = true
				state.errors = undefined
				state.readOnly = true
			})
			.addCase(postProfileDataThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.errors = undefined
				state.data = action.payload
				state.formData = state.data
				state.readOnly = true
			})
			.addCase(postProfileDataThunk.rejected, (state, action) => {
				state.isLoading = false
				state.errors = action.payload

				const { isServerErrors } = mappingErrors(action.payload)

				state.readOnly = isServerErrors
			})
	}
})

export const { actions: editableProfileActions } = editableProfileCardSlice
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice
