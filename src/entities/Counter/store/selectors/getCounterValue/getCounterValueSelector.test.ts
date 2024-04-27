import { mainStoreMap } from "@app/store"
import { getCounterValueSelector } from "./getCounterValue.selector"

describe("getCounterValueSelectorTest", () => {
	test("Getting value from state counter", () => {
		const state: mainStoreMap = { counter: { value: 10 } }

		expect(getCounterValueSelector(state)).toBe(10)
	})
})
