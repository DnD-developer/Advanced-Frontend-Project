import { mainStateMap } from "@app/store"
import { getCounterValueSelector } from "./getCounterValue.selector"

describe("getCounterValueSelectorTest", () => {
	test("Getting value from state counter", () => {
		const state: Partial<mainStateMap> = { counter: { value: 10 } }

		expect(getCounterValueSelector(state as mainStateMap)).toBe(10)
	})
})
