import { DeepPartial } from "@customTypes/global.types"
import { articleDetailsDataType } from "@entities/Article"
import { describe, expect, test } from "@jest/globals"
import { articlesRecommendationState } from "../storeTypes/articlesRecommendationState.map"
import { fetchArticlesRecommendationThunk } from "../thunks/fetchArticlesRecommendation/fetchArticlesRecommendation.thunk"
import { articlesRecommendationReducer } from "./articlesRecommendation.slice"

describe("articlesRecommendationSliceTest extraReducers", () => {
	test("pending", () => {
		const state: DeepPartial<articlesRecommendationState> = {
			isLoading: false,
			error: "test error"
		}

		const newState = articlesRecommendationReducer(
			state as articlesRecommendationState,
			fetchArticlesRecommendationThunk.pending("", undefined)
		)

		expect(newState).toEqual({
			isLoading: true,
			error: undefined
		})
	})

	test("fulfilled", () => {
		const state: DeepPartial<articlesRecommendationState> = {
			isLoading: true,
			ids: [],
			entities: {}
		}

		const data: DeepPartial<articleDetailsDataType[]> = [
			{
				id: "1"
			}
		]

		const newState = articlesRecommendationReducer(
			state as articlesRecommendationState,
			fetchArticlesRecommendationThunk.fulfilled(
				data as articleDetailsDataType[],
				"",
				undefined
			)
		)

		expect(newState).toEqual({
			isLoading: false,
			ids: ["1"],
			entities: {
				"1": {
					id: "1"
				}
			}
		})
	})

	test("rejected", () => {
		const state: DeepPartial<articlesRecommendationState> = {
			isLoading: true,
			error: undefined
		}

		const newState = articlesRecommendationReducer(
			state as articlesRecommendationState,
			fetchArticlesRecommendationThunk.rejected(null, "", undefined, "error text")
		)

		expect(newState).toEqual({
			isLoading: false,
			error: "error text"
		})
	})
})
