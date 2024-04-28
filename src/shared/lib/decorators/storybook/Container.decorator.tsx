import { type Decorator } from "@storybook/react"

export const ContainerDecorator: Decorator = Story => (
	<div className="stories-container">
		<Story />
	</div>
)
