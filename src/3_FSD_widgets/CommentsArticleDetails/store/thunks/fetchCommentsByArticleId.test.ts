import { DeepPartial } from "@customTypes/global.types"
import { articleDetailsDataType } from "@entities/Article"
import { commentDataType } from "@entities/Comment"
import { beforeEach, describe, expect, test } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { commentsArticleDetailsMap } from "../storeTypes/commentsArticleDetails.map"
import { fetchCommentsByArticleIdThunk } from "./fetchCommentsByArticleId.thunk"

let thunk: AsyncThunkMock<
	commentDataType[],
	articleDetailsDataType["id"],
	thunkConfigType<commentsArticleDetailsMap["error"]>
>

let DataValue: DeepPartial<commentDataType[]>

let mockedRequest: (typeof AsyncThunkMock<
	commentDataType[],
	articleDetailsDataType["id"],
	thunkConfigType<commentsArticleDetailsMap["error"]>
>)["prototype"]["api"]["get"]

describe("fetchProfileDataThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(fetchCommentsByArticleIdThunk)
		mockedRequest = thunk.api.get
	})

	test("gettingComments fullFilled", async () => {
		DataValue = [{ id: "1" }, { id: "2" }]

		mockedRequest.mockReturnValue(Promise.resolve({ data: DataValue }))

		const result = await thunk.callThunk("1")

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(DataValue)
	})

	test("gettingComments rejected no Data", async () => {
		mockedRequest.mockReturnValue(Promise.resolve({ response: { data: null } }))

		const result = await thunk.callThunk("1")

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toBe("no data")
	})

	test("gettingComments rejected articleId", async () => {
		mockedRequest.mockReturnValue(Promise.resolve({ response: { data: DataValue } }))

		const result = await thunk.callThunk(null as unknown as string)

		expect(mockedRequest).not.toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toBe("no articleId")
	})

	test("gettingComments rejected", async () => {
		mockedRequest.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk("1")

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual("error with request")
	})
})
