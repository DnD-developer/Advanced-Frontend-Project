import { createReduxStore } from "@store/store"
import { mainStoreMap } from "@store/storeTypes/mainStore.map"
import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"

type StoreProviderProps = {
	initialState?: mainStoreMap
} & PropsWithChildren

export const StoreProvider: FC<StoreProviderProps> = props => {
	const { children, initialState } = props

	const store = createReduxStore(initialState)

	return <Provider store={store}>{children}</Provider>
}
