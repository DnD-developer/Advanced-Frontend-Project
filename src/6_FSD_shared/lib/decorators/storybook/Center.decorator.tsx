import { type Decorator } from "@storybook/react"
import { Suspense } from "react"

export const CenterDecorator: Decorator = Story => (
	<div
		style={{
			height: "100vh",
			display: "flex",
			padding: "0 20px",
			justifyContent: "center",
			alignItems: "center"
		}}
	>
		<Suspense>
			<Story />
		</Suspense>
	</div>
)
