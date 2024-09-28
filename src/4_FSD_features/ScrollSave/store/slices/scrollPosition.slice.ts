import type { PayloadAction } from "@reduxjs/toolkit"
import type { scrollPositionState, scrollType } from "../storeTypes/scrollPositionState.map"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"

const initialState: scrollPositionState = {
	scroll: {}
}

const scrollPositionSlice = buildSlice({
	name: "scrollPosition",
	initialState,
	reducers: {
		setScrollPosition: (state: scrollPositionState, action: PayloadAction<scrollType>) => {
			state.scroll = { ...state.scroll, ...action.payload }
		}
	}
})

export const {
	actions: scrollPositionActions,
	reducer: scrollPositionReducer,
	useActions: useScrollPositionActions
} = scrollPositionSlice
