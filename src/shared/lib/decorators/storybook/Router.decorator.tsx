import { type Decorator } from "@storybook/react"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

export const RouterDecorator: Decorator = Story => (
	<BrowserRouter>
		<Suspense>
			<Story />
		</Suspense>
	</BrowserRouter>
)
