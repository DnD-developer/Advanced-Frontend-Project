import { $api } from "@api/instanceAxios.api"
import { userReducer } from "@entities/User"
import { configureStore, ReducersMapObject, UnknownAction } from "@reduxjs/toolkit"
import { NavigateFunction } from "react-router-dom"
import { createReducerManager, reducerManagerType } from "./reducerManager"
import { appStoreType } from "./storeTypes/appStoreType"
import { mainStateMap } from "./storeTypes/mainState.map"
import { mainStateAsyncMap } from "./storeTypes/mainStateAsync.map"
import { mainStateStaticMap } from "./storeTypes/mainStateStatic.map"
import { thunkExtraType } from "./storeTypes/thunks.type"

export const storeCreator = (
	reducerManager: reducerManagerType,
	initialState: mainStateMap,
	navigateFunction: NavigateFunction
) => {
	const apiService: thunkExtraType = {
		api: $api,
		navigate: navigateFunction
	}

	return configureStore<mainStateMap, UnknownAction>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => {
			return getDefaultMiddleware({
				thunk: {
					extraArgument: apiService
				}
			})
		}
	})
}

export function createReduxStore(
	initialState?: mainStateMap,
	asyncReducers?: ReducersMapObject<mainStateAsyncMap>,
	navigate?: NavigateFunction
) {
	const staticReducer: ReducersMapObject<mainStateStaticMap> = {
		user: userReducer
	}

	const rootReducer: ReducersMapObject<mainStateMap> = {
		...staticReducer,
		...asyncReducers
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = storeCreator(reducerManager, initialState, navigate)

	const appStore: appStoreType = { ...store, reducerManager: reducerManager }

	return appStore
}
