import { createSlice } from "@reduxjs/toolkit"
import { profileStateMap } from "../storeTypes/profileState.map"
import { fetchProfileDataThunk } from "../thunks/fetchProfileData/fetchProfileData.thunk"

const initialState: profileStateMap = {
	isLoading: false,
	data: undefined,
	readOnly: true,
	error: undefined
}

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
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
			})
			.addCase(fetchProfileDataThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
