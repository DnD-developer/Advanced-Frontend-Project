import { type Decorator } from "@storybook/react"

export const SimpleBgDecorator: Decorator = Story => (
	<div className="simple-bg">
		<Story />
	</div>
)
