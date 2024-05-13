import { Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateAsyncKeys, mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { useEffect } from "react"
import { useAppDispatch } from "./useAppDispatch.hook"
import { useAppStore } from "./useAppStore.hook"

type asyncReducersTupleType = [key: mainStateAsyncKeys, value: Reducer]

export type asyncReducersList = ReducersMapObject<mainStateAsyncMap>

export const useAsyncReducer = (asyncReducers: asyncReducersList) => {
	const storeApp = useAppStore()
	const dispatch = useAppDispatch()

	useEffect(() => {
		Object.entries(asyncReducers).forEach(([key, value]: asyncReducersTupleType) => {
			storeApp.reducerManager.add(key, value)
			dispatch({ type: `@INIT ${key}` })
		})

		return () => {
			Object.entries(asyncReducers).forEach(([key, value]: asyncReducersTupleType) => {
				storeApp.reducerManager.remove(key, value)
				dispatch({ type: `@DESTROY ${key}` })
			})
		}
	}, [asyncReducers, dispatch, storeApp.reducerManager])
}
