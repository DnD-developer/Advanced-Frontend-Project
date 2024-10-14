import type { DeepPartial } from "@customTypes/global.types"
import { beforeEach, describe, expect, test } from "@jest/globals"
import type { addArticleCommentStateMap } from "../storeTypes/addArticleCommentState.map"
import { addNewArticleCommentThunk } from "../thunks/addNewArticleCommentThunk/addNewArticleComment.thunk"
import { addArticleCommentActions, addArticleCommentReducer } from "./addArticleComment.slice"

let state: DeepPartial<addArticleCommentStateMap>

const commentData = {
	id: "1",
	articleId: "1",
	text: "newTestText",
	userId: "1"
}

describe("addArticleCommentSliceTest Reducers", () => {
	beforeEach(() => {
		state = {
			text: "test Text",
			isLoading: false,
			error: "error"
		}
	})
	test("setText", () => {
		const newState = addArticleCommentReducer(
			state as addArticleCommentStateMap,
			addArticleCommentActions.setText("new test text")
		)

		expect(newState).toEqual({ ...state, text: "new test text", error: undefined })
	})
})

describe("addArticleCommentSliceTest ExtraReducers addNewArticleCommentThunk", () => {
	beforeEach(() => {
		state = {
			text: "test Text",
			isLoading: false,
			error: "error"
		}
	})

	test("addNewArticleCommentThunk pending", () => {
		const newState = addArticleCommentReducer(
			state as addArticleCommentStateMap,
			addNewArticleCommentThunk.pending("", commentData)
		)

		expect(newState).toEqual({ ...state, isLoading: true, error: undefined })
	})

	test("addNewArticleCommentThunk fulfilled", () => {
		state = { ...state, isLoading: true }

		const newState = addArticleCommentReducer(
			state as addArticleCommentStateMap,
			addNewArticleCommentThunk.fulfilled(commentData, "", commentData)
		)

		expect(newState).toEqual({ ...state, isLoading: false, error: undefined, text: "" })
	})

	test("addNewArticleCommentThunk rejected", () => {
		state = { ...state, error: undefined, isLoading: true }

		const newState = addArticleCommentReducer(
			state as addArticleCommentStateMap,
			addNewArticleCommentThunk.rejected(null, "", commentData, "error request")
		)

		expect(newState).toEqual({ ...state, isLoading: false, error: "error request", text: "" })
	})
})
