import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { scrollPositionState, scrollType } from "../storeTypes/scrollPositionState.map"

const initialState: scrollPositionState = {
	scroll: {}
}

const scrollPositionSlice = createSlice({
	name: "scrollPosition",
	initialState,
	reducers: {
		setScrollPosition: (state: scrollPositionState, action: PayloadAction<scrollType>) => {
			state.scroll = { ...state.scroll, ...action.payload }
		}
	}
})

export const { actions: scrollPositionActions } = scrollPositionSlice
export const { reducer: scrollPositionReducer } = scrollPositionSlice
