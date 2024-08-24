import type { DeepPartial } from "@customTypes/global.types"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articlesListActions } from "../../slices/articlesList.slice"
import type { articlesListStateMap } from "../../storeTypes/articlesListState.map"
import { fetchArticlesThunk } from "../fetchArticles/fetchArticles.thunk"
import { fetchNextArticlesPageThunk } from "./fetchNextArticlesPage.thunk"

type AsyncThunkMockType = AsyncThunkMock<
	undefined,
	undefined,
	thunkConfigType<articlesListStateMap["error"]>
>

let thunk: AsyncThunkMockType

jest.mock("../fetchArticles/fetchArticles.thunk")

describe("fetchProfileDataThunkTest", () => {
	test("fetchNextArticlesPageThunk fulfilled hasMore", async () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				isLoading: false,
				hasMore: true,
				pageNumber: 1
			}
		}

		thunk = new AsyncThunkMock(fetchNextArticlesPageThunk, state)

		const result = await thunk.callThunk(undefined)

		expect(thunk.dispatch).toHaveBeenCalledTimes(4)
		expect(thunk.dispatch).toHaveBeenCalledWith(articlesListActions.setPage())
		expect(fetchArticlesThunk).toHaveBeenCalledWith({})
		expect(thunk.dispatch).toHaveBeenCalledWith(fetchArticlesThunk({}))
		expect(result.meta.requestStatus).toBe("fulfilled")
	})

	test("fetchNextArticlesPageThunk rejected NoMore", async () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				isLoading: false,
				hasMore: false,
				pageNumber: 1
			}
		}

		thunk = new AsyncThunkMock(fetchNextArticlesPageThunk, state)

		const result = await thunk.callThunk(undefined)

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(fetchArticlesThunk).not.toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
	})

	test("fetchNextArticlesPageThunk rejected isLoading", async () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				isLoading: true,
				hasMore: true,
				pageNumber: 1
			}
		}

		thunk = new AsyncThunkMock(fetchNextArticlesPageThunk, state)

		const result = await thunk.callThunk(undefined)

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(fetchArticlesThunk).not.toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe("fulfilled")
	})
})
