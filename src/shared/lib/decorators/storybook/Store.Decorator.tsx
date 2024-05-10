import { mainStateMap } from "@app/store"
import { DeepPartial } from "@app/types/global.types"
import { loginFormReducer } from "@features/AuthByUserName/store/slices/loginForm.slice"
import { StoreProvider } from "@providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { Decorator } from "@storybook/react"

const asyncReducersDefault: DeepPartial<ReducersMapObject<mainStateAsyncMap>> = {
	loginForm: loginFormReducer
}

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
