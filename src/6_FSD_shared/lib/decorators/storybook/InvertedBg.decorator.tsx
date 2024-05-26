import { type Decorator } from "@storybook/react"

export const InvertedBgDecorator: Decorator = (Story, parameters) => {
	const { args, tags } = parameters
	const inverted =
		(args?.inverted && !tags.includes("background")) ||
		(!args?.inverted && tags.includes("background"))

	if (inverted) {
		return (
			<div className="inverted-bg">
				<Story />
			</div>
		)
	}

	return (
		<div className="stories-container">
			<Story />
		</div>
	)
}
