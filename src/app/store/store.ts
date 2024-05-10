import { userReducer } from "@entities/User"
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { createReducerManager } from "./reducerManager"
import { mainStateMap } from "./storeTypes/mainState.map"
import { mainStateAsyncMap } from "./storeTypes/mainStateAsync.map"
import { mainStateStaticMap } from "./storeTypes/mainStateStatic.map"
import { storeAppType } from "./storeTypes/storeApp.type"

export function createReduxStore(
	initialState?: mainStateMap,
	asyncReducers?: ReducersMapObject<mainStateAsyncMap>
) {
	const staticReducer: ReducersMapObject<mainStateStaticMap> = {
		user: userReducer
	}

	const rootReducer: ReducersMapObject<mainStateMap> = {
		...staticReducer,
		...asyncReducers
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore<mainStateMap>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})

	const appStore: storeAppType = { ...store, reducerManager: reducerManager }

	return appStore
}
