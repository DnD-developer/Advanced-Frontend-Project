import { type Decorator } from "@storybook/react"

export const PageDecorator: Decorator = Story => (
	<div className="page-wrapper full-height">
		<Story />
	</div>
)
