import { ThemesProvider } from "@app/providers/ThemeContext"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./app/App"

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