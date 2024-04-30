import { type Decorator } from "@storybook/react"

export const InvertedBgDecorator: Decorator = Story => (
	<div className="inverted-bg">
		<Story />
	</div>
)
