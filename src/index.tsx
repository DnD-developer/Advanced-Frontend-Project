import App from "@app/App"
import { StoreProvider } from "@providers/StoreProvider"
import { ThemesProvider } from "@providers/ThemeProvider"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "@styles/index.style.scss"
import "@config/i18n/i18n"

const domRoot = document.getElementById("root")

const root = createRoot(domRoot)

const RootComponent = (
	<StrictMode>
		<StoreProvider>
			<BrowserRouter>
				<ThemesProvider>
					<App />
				</ThemesProvider>
			</BrowserRouter>
		</StoreProvider>
	</StrictMode>
)

root.render(RootComponent)
