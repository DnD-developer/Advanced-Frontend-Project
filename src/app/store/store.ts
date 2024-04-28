import { CounterReducer } from "@entities/Counter"
import { configureStore } from "@reduxjs/toolkit"
import { mainStoreMap } from "./storeTypes/mainStore.map"

export function createReduxStore(initialState?: mainStoreMap) {
	return configureStore<mainStoreMap>({
		reducer: {
			counter: CounterReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
