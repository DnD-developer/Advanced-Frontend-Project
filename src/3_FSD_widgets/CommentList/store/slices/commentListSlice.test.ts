import { DeepPartial } from "@customTypes/global.types"
import { commentDataType } from "@entities/Comment"
import { describe, expect, test } from "@jest/globals"
import { commentListStateMap } from "../storeTypes/commentListStateMap"
import { fetchCommentsByArticleIdThunk } from "../thunks/fetchCommentsByArticleId.thunk"
import comments from "./commentList.data.json"
import { commentListReducer } from "./commentList.slice"

const rootState: DeepPartial<commentListStateMap> = {
	isLoading: false,
	error: "error",
	entities: comments,
	ids: ["1", "2", "3"]
}

describe("commentListSliceTest extraReducers fetchCommentListByArticleId", () => {
	test("pending", () => {
		const state: DeepPartial<commentListStateMap> = rootState

		const newState = commentListReducer(
			state as commentListStateMap,
			fetchCommentsByArticleIdThunk.pending("", "")
		)

		expect(newState).toEqual({ ...state, isLoading: true, error: undefined })
	})

	test("fulfilled", () => {
		const state: DeepPartial<commentListStateMap> = {
			...rootState,
			isLoading: true,
			error: "error"
		}

		const newState = commentListReducer(
			state as commentListStateMap,
			fetchCommentsByArticleIdThunk.fulfilled(
				comments as unknown as commentDataType[],
				"",
				""
			)
		)

		expect(newState).toEqual({ ...state, isLoading: false, error: undefined })
	})

	test("rejected", () => {
		const state: DeepPartial<commentListStateMap> = rootState

		const newState = commentListReducer(
			state as commentListStateMap,
			fetchCommentsByArticleIdThunk.rejected(null, "", "", "error with request")
		)

		expect(newState).toEqual({ ...state, isLoading: false, error: "error with request" })
	})
})
