import { type Decorator } from "@storybook/react"

export const CenterDecorator: Decorator = Story => (
	<div
		style={{
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}
	>
		<Story />
	</div>
)
