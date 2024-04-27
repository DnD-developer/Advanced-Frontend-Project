import { counterStoreMap } from "../storeMaps/counterStore.map"
import { counterActions, counterReducer } from "./counter.slice"

describe("counterSliceTest", () => {
	const { increment, decrement } = counterActions

	test("increment", () => {
		const state: counterStoreMap = { value: 10 }

		const newState = counterReducer(state, increment())

		expect(newState).toEqual({ value: 11 })
	})

	test("decrement", () => {
		const state: counterStoreMap = { value: 10 }

		const newState = counterReducer(state, decrement())

		expect(newState).toEqual({ value: 9 })
	})

	test("with undefined state", () => {
		const newState = counterReducer(undefined, increment())

		expect(newState).toEqual({ value: 1 })
	})
})
