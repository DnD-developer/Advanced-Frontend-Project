import App from "@app/App"
import { ThemesProvider } from "@app/providers/ThemeContext"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "@styles/index.style.scss"
import "@config/i18n/i18n"

const domRoot = document.getElementById("root")

const root = createRoot(domRoot)

const RootComponent = (
	<StrictMode>
		<BrowserRouter>
			<ThemesProvider>
				<App />
			</ThemesProvider>
		</BrowserRouter>
	</StrictMode>
)

root.render(RootComponent)
