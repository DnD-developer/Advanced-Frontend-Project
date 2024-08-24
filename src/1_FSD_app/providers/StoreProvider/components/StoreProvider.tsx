import type { ReducersMapObject } from "@reduxjs/toolkit"
import { createReduxStore } from "@store/store"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import type { PropsWithChildren } from "react"
import { memo } from "react"
import { Provider } from "react-redux"

type StoreProviderProps = {
	initialState?: mainStateMap
	asyncReducers?: ReducersMapObject<mainStateAsyncMap>
} & PropsWithChildren

export const StoreProvider = memo<StoreProviderProps>(props => {
	const { children, initialState, asyncReducers } = props

	const store = createReduxStore(initialState, asyncReducers)

	return <Provider store={store}>{children}</Provider>
})
