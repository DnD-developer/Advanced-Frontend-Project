import { USER_TOKEN } from "@constants/localStorage.constant"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userData } from "../storeTypes/userData.type"
import { userStateMap } from "../storeTypes/userState.map"

const initialState: userStateMap = {}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state: userStateMap, action: PayloadAction<userData>) => {
			localStorage.setItem(USER_TOKEN, JSON.stringify(action.payload))
			state.authData = action.payload
		},
		initAuthData: (state: userStateMap) => {
			state.authData = JSON.parse(localStorage.getItem(USER_TOKEN))
		},
		logOut: (state: userStateMap) => {
			localStorage.removeItem(USER_TOKEN)
			state.authData = undefined
		}
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
