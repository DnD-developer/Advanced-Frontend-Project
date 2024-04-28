import { counterReducer } from "@entities/Counter"
import { userReducer } from "@entities/User"
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateMap } from "./storeTypes/mainState.map"

export function createReduxStore(initialState?: mainStateMap) {
	const rootReducer: ReducersMapObject<mainStateMap> = {
		counter: counterReducer,
		user: userReducer
	}

	return configureStore<mainStateMap>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
