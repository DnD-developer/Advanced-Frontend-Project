import { DeepPartial } from "@customTypes/global.types"
import { articleDetailsDataType } from "@entities/Article"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articlesRecommendationState } from "../../storeTypes/articlesRecommendationState.map"
import { fetchArticlesRecommendationThunk } from "./fetchArticlesRecommendation.thunk"

let DataValue: DeepPartial<articleDetailsDataType[]>

type AsyncThunkMockType = AsyncThunkMock<
	articleDetailsDataType[],
	undefined,
	thunkConfigType<articlesRecommendationState["error"]>
>

let thunk: AsyncThunkMockType

let mockedRequest: AsyncThunkMockType["api"]["get"]

describe("fetchProfileDataThunkTest", () => {
	beforeEach(() => {
		thunk = new AsyncThunkMock(fetchArticlesRecommendationThunk)
		mockedRequest = thunk.api.get
	})

	test(" fulfilled", async () => {
		DataValue = [{ id: "1" }, { id: "2" }]

		mockedRequest.mockReturnValue(Promise.resolve({ data: DataValue }))

		const result = await thunk.callThunk(undefined)

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
		expect(result.payload).toEqual(DataValue)
	})

	test(" rejected", async () => {
		mockedRequest.mockReturnValue(Promise.reject({ response: { status: 403 } }))

		const result = await thunk.callThunk(undefined)

		expect(mockedRequest).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("rejected")
		expect(result.payload).toBe("error with request recommendation")
	})
})
