import { type Decorator } from "@storybook/react"

export const PageDecorator: Decorator = Story => (
	<div className="full-height page-wrapper">
		<Story />
	</div>
)
