import { beforeEach, describe, expect, test } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articleDataMock } from "../../../lib/mocks/articleData.mock"
import { articleDetailsDataType } from "../../../types/articleDetailsData.type"
import { articleDetailsStateMap } from "../../storeTypes/articleDetailsState.map"
import { fetchArticleDataByIdThunk } from "./fetchArticleDataById.thunk"

let thunk: AsyncThunkMock<
	articleDetailsDataType,
	string,
	thunkConfigType<articleDetailsStateMap["error"]>
>

let mockedRequest: (typeof AsyncThunkMock<
	articleDetailsDataType,
	string,
	thunkConfigType<articleDetailsStateMap["error"]>
>)["prototype"]["api"]["get"]

describe("fetchProfileDataThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(fetchArticleDataByIdThunk)
		mockedRequest = thunk.api.get
	})

	test("getting ArticleData fullFilled", async () => {
		mockedRequest.mockReturnValue(Promise.resolve({ data: articleDataMock }))

		const result = await thunk.callThunk("1")

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(articleDataMock)
	})

	test("getting articleData rejected", async () => {
		mockedRequest.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk("1")

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toEqual("Error with Request")
	})
})
