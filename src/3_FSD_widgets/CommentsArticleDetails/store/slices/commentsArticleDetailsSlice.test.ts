import { DeepPartial } from "@customTypes/global.types"
import { commentDataType } from "@entities/Comment"
import { describe, expect, test } from "@jest/globals"
import { commentsArticleDetailsMap } from "../storeTypes/commentsArticleDetails.map"
import { fetchCommentsByArticleIdThunk } from "../thunks/fetchCommentsByArticleId.thunk"
import comments from "./commentList.data.json"
import { commentsArticleDetailsReducer } from "./commentsArticleDetails.slice"

const rootState: DeepPartial<commentsArticleDetailsMap> = {
	isLoading: false,
	error: "error",
	entities: comments,
	ids: ["1", "2", "3"]
}

describe("commentsArticleDetailsSliceTest extraReducers fetchCommentListByArticleId", () => {
	test("pending", () => {
		const state: DeepPartial<commentsArticleDetailsMap> = rootState

		const newState = commentsArticleDetailsReducer(
			state as commentsArticleDetailsMap,
			fetchCommentsByArticleIdThunk.pending("", "")
		)

		expect(newState).toEqual({ ...state, isLoading: true, error: undefined })
	})

	test("fulfilled", () => {
		const state: DeepPartial<commentsArticleDetailsMap> = {
			...rootState,
			isLoading: true,
			error: "error"
		}

		const newState = commentsArticleDetailsReducer(
			state as commentsArticleDetailsMap,
			fetchCommentsByArticleIdThunk.fulfilled(
				comments as unknown as commentDataType[],
				"",
				""
			)
		)

		expect(newState).toEqual({ ...state, isLoading: false, error: undefined })
	})

	test("rejected", () => {
		const state: DeepPartial<commentsArticleDetailsMap> = rootState

		const newState = commentsArticleDetailsReducer(
			state as commentsArticleDetailsMap,
			fetchCommentsByArticleIdThunk.rejected(null, "", "", "error with request")
		)

		expect(newState).toEqual({ ...state, isLoading: false, error: "error with request" })
	})
})
