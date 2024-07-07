import { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import { articleDetailsDataType } from "../../types/articleDetailsData.type"
import { articleDetailsStateMap } from "../storeTypes/articleDetailsState.map"
import { fetchArticleDataByIdThunk } from "../thunks/fetchArticleDataByIdThunk/fetchArticleDataById.thunk"
import { articleReducer } from "./article.slice"

const data: DeepPartial<articleDetailsDataType> = {
	id: "1"
}

describe("articleSliceTest extraReducers fetchArticleDataByIdThunk", () => {
	test("pending", () => {
		const state: DeepPartial<articleDetailsStateMap> = {
			isLoading: false,
			error: "error",
			data: data
		}

		const newState = articleReducer(
			state as articleDetailsStateMap,
			fetchArticleDataByIdThunk.pending("", "")
		)
		expect(newState).toEqual({ ...state, isLoading: true, error: undefined })
	})

	test("fulfilled", () => {
		const state: DeepPartial<articleDetailsStateMap> = {
			isLoading: true,
			error: "error",
			data: data
		}

		const newState = articleReducer(
			state as articleDetailsStateMap,
			fetchArticleDataByIdThunk.fulfilled(data as articleDetailsDataType, "", "")
		)
		expect(newState).toEqual({ ...state, isLoading: false, error: undefined })
	})

	test("rejected", () => {
		const state: DeepPartial<articleDetailsStateMap> = {
			isLoading: true,
			error: undefined,
			data: data
		}

		const newState = articleReducer(
			state as articleDetailsStateMap,
			fetchArticleDataByIdThunk.rejected(null, "", "", "Error with Request")
		)
		expect(newState).toEqual({ ...state, isLoading: false, error: "Error with Request" })
	})
})
