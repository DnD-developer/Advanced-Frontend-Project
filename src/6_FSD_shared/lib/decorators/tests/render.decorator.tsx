import { i18nTest } from "@config/i18n/i18nForTest"
import { StoreProvider } from "@providers/StoreProvider"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { render, RenderResult } from "@testing-library/react"
import { type ReactNode, Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router"

type optionsType = {
	route?: string
	initialState?: Partial<mainStateMap>
}

export const renderDecorator = (component: ReactNode, options: optionsType = {}): RenderResult => {
	const { initialState = {}, route = "/" } = options

	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState as mainStateMap}>
				<Suspense>
					<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
				</Suspense>
			</StoreProvider>
		</MemoryRouter>
	)
}
