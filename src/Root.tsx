import App from "@app/App"
import { StoreProvider } from "@providers/StoreProvider"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

//eslint-disable-next-line
export const RootComponent = () => {
	return (
		<BrowserRouter>
			<StoreProvider>
				<Suspense fallback={""}>
					<App />
				</Suspense>
			</StoreProvider>
		</BrowserRouter>
	)
}
