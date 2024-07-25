import { DeepPartial } from "@customTypes/global.types"
import { expect } from "@jest/globals"
import { AsyncThunkMock } from "@mocks/AsyncThunk.mock"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { thunkConfigType } from "@store/storeTypes/thunks.type"
import { articlesListActions } from "../../slices/articlesList.slice"
import { fetchArticlesThunk } from "../fetchArticles/fetchArticles.thunk"
import { initArticlesListThunk } from "./initArticlesList.thunk"

type AsyncThunkMockType = AsyncThunkMock<undefined, undefined, thunkConfigType<undefined>>

let thunk: AsyncThunkMockType

jest.mock("../fetchArticles/fetchArticles.thunk")

describe("fetchProfileDataThunkTest", () => {
	test("before inited", async () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				_inited: false,
				pageNumber: 1
			}
		}

		thunk = new AsyncThunkMock(initArticlesListThunk, state)

		await thunk.callThunk(undefined)

		expect(thunk.dispatch).toBeCalled()
		expect(thunk.dispatch).toBeCalledTimes(4)
		expect(thunk.getState()).toEqual({
			articlesListStateMap: {
				_inited: false,
				pageNumber: 1
			}
		})
		expect(thunk.dispatch).toBeCalledWith(articlesListActions.initState())
		expect(thunk.dispatch).toBeCalledWith(fetchArticlesThunk(1))
	})

	test("after inited", async () => {
		const state: DeepPartial<mainStateMap> = {
			articlesListStateMap: {
				_inited: true,
				pageNumber: 1
			}
		}

		thunk = new AsyncThunkMock(initArticlesListThunk, state)
		await thunk.callThunk(undefined)

		expect(thunk.dispatch).toBeCalled()
		expect(thunk.dispatch).toBeCalledTimes(2)
		expect(thunk.getState()).toEqual({
			articlesListStateMap: {
				_inited: true,
				pageNumber: 1
			}
		})
		expect(thunk.dispatch).not.toBeCalledWith(articlesListActions.initState())
		expect(thunk.dispatch).not.toBeCalledWith(fetchArticlesThunk(1))
	})
})
