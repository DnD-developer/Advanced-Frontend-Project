import { DeepPartial } from "@customTypes/global.types"
import { articleDetailsDataType } from "@entities/Article"
import { beforeEach, describe, expect, test } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articlesListStateMap } from "../../storeTypes/articlesListState.map"
import { fetchArticlesThunk, fetchArticlesThunkProps } from "./fetchArticles.thunk"

let DataValue: DeepPartial<articleDetailsDataType>[]

type AsyncThunkMockType = AsyncThunkMock<
	articleDetailsDataType[],
	fetchArticlesThunkProps,
	thunkConfigType<articlesListStateMap["error"]>
>

let thunk: AsyncThunkMockType

let mockedRequest: AsyncThunkMockType["api"]["get"]

const state: DeepPartial<mainStateMap> = {
	articlesListStateMap: {
		limit: 12
	}
}

describe("fetchProfileDataThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(fetchArticlesThunk, state)
		mockedRequest = thunk.api.get
	})

	test("fetchProfileDataThunkTest fulfilled", async () => {
		DataValue = [{ id: "1" }, { id: "2" }]

		mockedRequest.mockReturnValue(Promise.resolve({ data: DataValue }))

		const result = await thunk.callThunk({})

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(DataValue)
	})

	test("fetchProfileDataThunkTest rejected", async () => {
		mockedRequest.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk({})

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toBe("error with request articles")
	})
})
