import { $api } from "@api/instanceAxios.api"
import { rtkBaseApi } from "@api/rtkBase.api"
import { userReducer } from "@entities/User"
import { scrollPositionReducer } from "@features/ScrollSave"
import type { Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import type { reducerManagerType } from "./reducerManager"
import { createReducerManager } from "./reducerManager"
import { type appStoreType } from "./storeTypes/appStoreType"
import { type mainStateMap } from "./storeTypes/mainState.map"
import { type mainStateAsyncMap } from "./storeTypes/mainStateAsync.map"
import { type mainStateStaticMap } from "./storeTypes/mainStateStatic.map"
import { type thunkExtraType } from "./storeTypes/thunks.type"

export const storeCreator = ({ reduce }: reducerManagerType, initialState?: mainStateMap) => {
	const apiService: thunkExtraType = {
		api: $api
	}

	return configureStore({
		reducer: reduce as Reducer<mainStateMap>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: apiService
				}
			}).concat(rtkBaseApi.middleware)
	})
}

export function createReduxStore(
	initialState?: mainStateMap,
	asyncReducers?: ReducersMapObject<mainStateAsyncMap>
) {
	const staticReducer: ReducersMapObject<mainStateStaticMap> = {
		user: userReducer,
		scrollPosition: scrollPositionReducer,
		[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
	}

	const rootReducer: ReducersMapObject<mainStateMap> = {
		...staticReducer,
		...asyncReducers
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = storeCreator(reducerManager, initialState)

	const appStore: appStoreType = { ...store, reducerManager: reducerManager }

	return appStore
}
