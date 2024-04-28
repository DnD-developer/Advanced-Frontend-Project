import { CounterStoreMap } from "../../storeTypes/CounterStore.map"
import { CounterActions, CounterReducer } from "./Counter.slice"

describe("CounterSliceTest", () => {
	const { increment, decrement } = CounterActions

	test("increment", () => {
		const state: CounterStoreMap = { value: 10 }

		const newState = CounterReducer(state, increment())

		expect(newState).toEqual({ value: 11 })
	})

	test("decrement", () => {
		const state: CounterStoreMap = { value: 10 }

		const newState = CounterReducer(state, decrement())

		expect(newState).toEqual({ value: 9 })
	})

	test("with undefined state", () => {
		const newState = CounterReducer(undefined, increment())

		expect(newState).toEqual({ value: 1 })
	})
})
