import { type Decorator } from "@storybook/react"
import { Suspense } from "react"

export const ContainerDecorator: Decorator = Story => (
	<div className="stories-container">
		<Suspense>
			<Story />
		</Suspense>
	</div>
)
