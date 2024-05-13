import { createSlice } from "@reduxjs/toolkit"
import { profileStateMap } from "../storeTypes/profileState.map"

const initialState: profileStateMap = {
	isLoading: false,
	data: undefined,
	readOnly: true,
	error: undefined
}

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
