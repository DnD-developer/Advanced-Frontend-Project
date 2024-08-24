import { USER_TOKEN } from "@constants/localStorage.constant"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { userDataType } from "../../types/userData.type"
import type { userStateMap } from "../storeTypes/userState.map"

const initialState: userStateMap = {
	_initAuthData: false
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state: userStateMap, action: PayloadAction<userDataType>) => {
			localStorage.setItem(USER_TOKEN, JSON.stringify(action.payload))
			state.authData = action.payload
		},
		initAuthData: (state: userStateMap) => {
			const userToken = localStorage.getItem(USER_TOKEN)

			if (userToken) {
				state.authData = JSON.parse(userToken)
			}

			state._initAuthData = true
		},
		logOut: (state: userStateMap) => {
			localStorage.removeItem(USER_TOKEN)
			state.authData = undefined
		}
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
