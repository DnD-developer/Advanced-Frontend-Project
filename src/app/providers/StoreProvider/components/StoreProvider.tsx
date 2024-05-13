import { ReducersMapObject } from "@reduxjs/toolkit"
import { createReduxStore } from "@store/store"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { useNavigate } from "react-router-dom"

type StoreProviderProps = {
	initialState?: mainStateMap
	asyncReducers?: ReducersMapObject<mainStateAsyncMap>
} & PropsWithChildren

export const StoreProvider: FC<StoreProviderProps> = props => {
	const { children, initialState, asyncReducers } = props

	const navigate = useNavigate()

	const store = createReduxStore(initialState, asyncReducers, navigate)

	return <Provider store={store}>{children}</Provider>
}
