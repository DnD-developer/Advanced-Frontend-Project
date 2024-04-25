import { i18nTest } from "@config/i18n/i18nForTest"
import { render, type RenderResult } from "@testing-library/react"
import { type ReactNode, Suspense } from "react"
import { I18nextProvider } from "react-i18next"
import { BrowserRouter } from "react-router-dom"

export const renderDecorator = (component: ReactNode): RenderResult => {
	return render(
		<BrowserRouter>
			<Suspense>
				<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
			</Suspense>
		</BrowserRouter>
	)
}
