import App from "@app/App"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { StoreProvider } from "@providers/StoreProvider"
import { ThemesProvider } from "@providers/ThemeProvider"
import { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "@styles/index.style.scss"
import "@config/i18n/i18n"

const domRoot = document.getElementById("root")

const root = createRoot(domRoot)

const RootComponent = (
	<BrowserRouter>
		<ErrorBoundaryProvider>
			<StoreProvider>
				<Suspense>
					<ThemesProvider>
						<App />
					</ThemesProvider>
				</Suspense>
			</StoreProvider>
		</ErrorBoundaryProvider>
	</BrowserRouter>
)

root.render(RootComponent)
