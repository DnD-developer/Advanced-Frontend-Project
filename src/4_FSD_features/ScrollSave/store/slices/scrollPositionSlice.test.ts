import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { scrollPositionState } from "../storeTypes/scrollPositionState.map"
import { scrollPositionActions, scrollPositionReducer } from "./scrollPosition.slice"

describe("scrollPositionSliceTest", () => {
	test("setScrollPosition", () => {
		const state: DeepPartial<scrollPositionState> = {
			scroll: {
				"/articles": 20
			}
		}

		const newState = scrollPositionReducer(
			state as scrollPositionState,
			scrollPositionActions.setScrollPosition({ "/page1": 25 })
		)

		expect(newState).toEqual({
			scroll: {
				"/articles": 20,
				"/page1": 25
			}
		})
	})
})
