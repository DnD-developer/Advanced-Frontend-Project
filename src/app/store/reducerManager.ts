import { Action, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateMap } from "./storeTypes/mainState.map"
import { mainStateAsyncKeys } from "./storeTypes/mainStateAsync.map"

export type reducerManagerType = {
	getReducerMap: () => ReducersMapObject<mainStateMap>
	reduce: (state: mainStateMap, action: Action) => mainStateMap
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
		reduce: (state: mainStateMap, action: Action) => {
			if (keysToRemove.length > 0) {
				state = { ...state }
				for (const key of keysToRemove) {
					// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
					delete state[key]
				}
				keysToRemove = []
			}

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
