import { USER_TOKEN } from "@constants/localStorage.constant"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { userDataType } from "../../types/userData.type"
import type { userStateMap } from "../storeTypes/userState.map"
import { setFeatureFlags } from "@config/featureFlags"

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
			setFeatureFlags(state.authData.features)
		},
		initAuthData: (state: userStateMap) => {
			const userToken = localStorage.getItem(USER_TOKEN)

			if (userToken) {
				state.authData = JSON.parse(userToken)

				if (state.authData) {
					setFeatureFlags(state.authData.features)
				}
			}

			state._initAuthData = true
		},
		logOut: (state: userStateMap) => {
			localStorage.removeItem(USER_TOKEN)
			state.authData = undefined
			setFeatureFlags({})
		}
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
