import { createSlice } from "@reduxjs/toolkit"
import { counterStateMap } from "../../storeTypes/counterState.map"

const initialState: counterStateMap = {
	value: 0
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		}
	}
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
