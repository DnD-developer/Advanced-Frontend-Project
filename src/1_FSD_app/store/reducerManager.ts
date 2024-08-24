import {
	combineReducers,
	type Reducer,
	type ReducersMapObject,
	type UnknownAction
} from "@reduxjs/toolkit"
import { type mainStateMap } from "./storeTypes/mainState.map"
import { type mainStateAsyncKeys } from "./storeTypes/mainStateAsync.map"

export type reducerManagerType = {
	getReducerMap: () => ReducersMapObject<mainStateMap>
	reduce: (tate: mainStateMap, action: UnknownAction) => mainStateMap
	add: (key: mainStateAsyncKeys, reducer: Reducer) => void
	remove: (key: mainStateAsyncKeys, reducer: Reducer) => void
}

export function createReducerManager(
	initialReducers: ReducersMapObject<mainStateMap>
): reducerManagerType {
	const reducers = { ...initialReducers }

	let combinedReducer = combineReducers(reducers)

	let keysToRemove: mainStateAsyncKeys[] = []

	return {
		getReducerMap: () => reducers,

		reduce: (state: mainStateMap, action: UnknownAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state }
				keysToRemove.forEach(key => {
					// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
					delete state[key]
				})
				keysToRemove = []
			}

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return combinedReducer(state, action)
		},

		add: (key: mainStateAsyncKeys, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return
			}

			reducers[key] = reducer

			combinedReducer = combineReducers(reducers)
		},

		remove: (key: mainStateAsyncKeys) => {
			if (!key || !reducers[key]) {
				return
			}

			// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
			delete reducers[key]

			keysToRemove.push(key)

			combinedReducer = combineReducers(reducers)
		}
	}
}
