import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getScrollPositionSelector } from "./getScrollPosition.selector"

describe("getScrollPositionSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			scrollPosition: {
				scroll: { ["/articles"]: 20 }
			}
		}
		expect(getScrollPositionSelector(state as mainStateMap)).toEqual({
			scroll: {
				"/articles": 20
			}
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getScrollPositionSelector(state as mainStateMap)).toEqual(undefined)
	})
})
