import { mainStoreMap } from "@app/store"
import { i18nTest } from "@config/i18n/i18nForTest"
import { StoreProvider } from "@providers/StoreProvider"
import { render, RenderResult } from "@testing-library/react"
import { type ReactNode, Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import { MemoryRouter } from "react-router"

type optionsType = {
	route?: string
	initialState?: Partial<mainStoreMap>
}

export const renderDecorator = (component: ReactNode, options: optionsType = {}): RenderResult => {
	const { initialState = {}, route = "/" } = options

	return render(
		<StoreProvider initialState={initialState as mainStoreMap}>
			<MemoryRouter initialEntries={[route]}>
				<Suspense>
					<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
				</Suspense>
			</MemoryRouter>
		</StoreProvider>
	)
}
