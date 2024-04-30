import { userReducer } from "@entities/User"
import { loginFormReducer } from "@features/AuthByUserName"
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateMap } from "./storeTypes/mainState.map"

export function createReduxStore(initialState?: mainStateMap) {
	const rootReducer: ReducersMapObject<mainStateMap> = {
		user: userReducer,
		loginForm: loginFormReducer
	}

	return configureStore<mainStateMap>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
