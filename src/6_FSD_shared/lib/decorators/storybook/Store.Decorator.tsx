import { DeepPartial } from "@app/types/global.types"
import { StoreProvider } from "@providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { Decorator } from "@storybook/react"

const asyncReducersDefault: DeepPartial<ReducersMapObject<mainStateAsyncMap>> = {}

export const StoreDecorator = (
	initialState: DeepPartial<mainStateMap>,
	asyncReducers?: DeepPartial<ReducersMapObject<mainStateAsyncMap>>
): Decorator => {
	const asyncReducersDynamic = {
		...asyncReducersDefault,
		...asyncReducers
	}

	return Story => (
		<StoreProvider
			initialState={initialState as mainStateMap}
			asyncReducers={asyncReducersDynamic as ReducersMapObject<mainStateAsyncMap>}
		>
			<Story />
		</StoreProvider>
	)
}
