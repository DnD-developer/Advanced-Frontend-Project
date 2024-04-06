import { i18nTest } from "@config/i18n/i18nForTest"
import { render, type RenderResult } from "@testing-library/react"
import { type ReactNode } from "react"
import { I18nextProvider } from "react-i18next"

export const renderWithTranslation = (component: ReactNode): RenderResult => {
	return render(<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>)
}
