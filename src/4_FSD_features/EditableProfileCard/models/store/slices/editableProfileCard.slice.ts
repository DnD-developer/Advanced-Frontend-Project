import { profileDataType } from "@entities/Profile"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { editableProfileStateMap } from "../storeTypes/editableProfileState.map"
import { fetchProfileDataThunk } from "../thunks/fetchProfileData/fetchProfileData.thunk"
import { postProfileDataThunk } from "../thunks/postProfileData/postProfileData.thunk"

const initialState: editableProfileStateMap = {
	isLoading: false,
	data: undefined,
	formData: undefined,
	readOnly: true,
	error: undefined
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
				state.error = undefined
			})
			.addCase(fetchProfileDataThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined
				state.data = action.payload
				state.formData = action.payload
			})
			.addCase(fetchProfileDataThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(postProfileDataThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
				state.readOnly = true
			})
			.addCase(postProfileDataThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined
				state.data = action.payload
				state.formData = state.data
				state.readOnly = true
			})
			.addCase(postProfileDataThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
				state.readOnly = true
			})
	}
})

export const { actions: editableProfileActions } = editableProfileCardSlice
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice
