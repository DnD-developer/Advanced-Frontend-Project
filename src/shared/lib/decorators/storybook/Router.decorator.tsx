import { StoreProvider } from "@providers/StoreProvider"
import { type Decorator } from "@storybook/react"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

export const RouterDecorator: Decorator = Story => (
	<StoreProvider>
		<BrowserRouter>
			<Suspense>
				<Story />
			</Suspense>
		</BrowserRouter>
	</StoreProvider>
)
