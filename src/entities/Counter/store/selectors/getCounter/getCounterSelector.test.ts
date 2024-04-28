import { mainStateMap } from "@app/store"
import { getCounterSelector } from "./getCounter.selector"

describe("getCounterSelectorTest", () => {
	test("Getting state Counter", () => {
		const state: Partial<mainStateMap> = { counter: { value: 10 } }

		expect(getCounterSelector(state as mainStateMap)).toEqual({ value: 10 })
	})
})
