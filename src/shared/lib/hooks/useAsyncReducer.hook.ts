import { Reducer } from "@reduxjs/toolkit"
import { mainStateAsyncKeys } from "@store/storeTypes/mainStateAsync.map"
import { useEffect } from "react"
import { useAppDispatch } from "./useAppDispatch.hook"
import { useAppStore } from "./useAppStore.hook"

export type asyncReducersList = {
	[name in mainStateAsyncKeys]?: Reducer
}
type asyncReducersEntries = [mainStateAsyncKeys, Reducer][]

export const useAsyncReducer = (asyncReducers: asyncReducersList) => {
	const storeApp = useAppStore()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const entries = Object.entries(asyncReducers) as unknown as asyncReducersEntries

		entries.forEach(([key, value]) => {
			storeApp.reducerManager.add(key as mainStateAsyncKeys, value)
			dispatch({ type: `@INIT ${key}` })
		})

		return () => {
			entries.forEach(([key, value]) => {
				storeApp.reducerManager.remove(key as mainStateAsyncKeys, value)
				dispatch({ type: `@DESTROY ${key}` })
			})
		}
	}, [asyncReducers, dispatch, storeApp.reducerManager])
}
