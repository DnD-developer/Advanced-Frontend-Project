import { createSlice } from "@reduxjs/toolkit"
import { userStateMap } from "../storeTypes/userState.map"

const initialState: userStateMap = {}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
