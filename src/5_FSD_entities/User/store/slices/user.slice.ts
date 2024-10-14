import { USER_TOKEN } from "@constants/localStorage.constant"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { userDataType } from "../../types/userData.type"
import type { userStateMap } from "../storeTypes/userState.map"
import { setFeatureFlags } from "@config/featureFlags"
import { fetchUserDataThunk } from "../thunks/fetchUserData/fetchUserData.thunk"

const initialState: userStateMap = {
	error: undefined,
	authData: undefined,
	_initAuthData: false
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state: userStateMap, action: PayloadAction<userDataType>) => {
			localStorage.setItem(USER_TOKEN, action.payload.id)

			state.error = undefined

			state.authData = action.payload
			setFeatureFlags(state.authData.features)
		},
		logOut: (state: userStateMap) => {
			localStorage.removeItem(USER_TOKEN)
			state.authData = undefined
			setFeatureFlags({})
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUserDataThunk.pending, state => {
				state.error = undefined
			})
			.addCase(fetchUserDataThunk.fulfilled, (state, action: PayloadAction<userDataType>) => {
				state.authData = action.payload

				setFeatureFlags(state.authData.features)

				state._initAuthData = true
				state.error = undefined
			})
			.addCase(fetchUserDataThunk.rejected, (state, action) => {
				state._initAuthData = true
				state.error = action.payload
			})
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
