import { createReduxStore } from "@store/store"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"

type StoreProviderProps = {
	initialState?: mainStateMap
} & PropsWithChildren

export const StoreProvider: FC<StoreProviderProps> = props => {
	const { children, initialState } = props

	const store = createReduxStore(initialState)

	return <Provider store={store}>{children}</Provider>
}
