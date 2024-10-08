import { i18nTest } from "@config/i18n/i18nForTest"
import type { DeepPartial } from "@customTypes/global.types"
import { StoreProvider } from "@providers/StoreProvider"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import type { RenderResult } from "@testing-library/react"
import { act, render } from "@testing-library/react"
import { type ReactNode, Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router"

type optionsType = {
	route?: string
	initialState?: DeepPartial<mainStateMap>
	asyncReducers?: DeepPartial<ReducersMapObject<mainStateAsyncMap>>
}

export const renderDecorator = async (
	component: ReactNode,
	options: optionsType = {}
): Promise<RenderResult> => {
	const { initialState = {}, asyncReducers = {}, route = "/" } = options

	const Element = await act(async () =>
		render(
			<MemoryRouter initialEntries={[route]}>
				<StoreProvider
					initialState={initialState as mainStateMap}
					asyncReducers={asyncReducers as ReducersMapObject<mainStateAsyncMap>}
				>
					<Suspense>
						<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
					</Suspense>
				</StoreProvider>
			</MemoryRouter>
		)
	)

	return Element
}
