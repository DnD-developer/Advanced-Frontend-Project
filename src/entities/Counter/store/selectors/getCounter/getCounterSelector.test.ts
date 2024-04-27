import { mainStoreMap } from "@app/store"
import { getCounterSelector } from "./getCounter.selector"

describe("getCounterSelectorTest", () => {
	test("Getting state Counter", () => {
		const state: Partial<mainStoreMap> = { counter: { value: 10 } }

		expect(getCounterSelector(state as mainStoreMap)).toEqual({ value: 10 })
	})
})
