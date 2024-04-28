import { createSlice } from "@reduxjs/toolkit"
import { CounterStoreMap } from "../../storeTypes/CounterStore.map"

const initialState: CounterStoreMap = {
	value: 0
}

export const CounterSlice = createSlice({
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

export const { actions: CounterActions } = CounterSlice
export const { reducer: CounterReducer } = CounterSlice
