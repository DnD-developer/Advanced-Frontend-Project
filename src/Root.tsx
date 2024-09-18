import App from "@app/App"
import { StoreProvider } from "@providers/StoreProvider"
import { ThemesProvider } from "@providers/ThemeProvider"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

//eslint-disable-next-line
export const RootComponent = () => (
	<BrowserRouter>
		<StoreProvider>
			<Suspense>
				<ThemesProvider>
					<App />
				</ThemesProvider>
			</Suspense>
		</StoreProvider>
	</BrowserRouter>
)
