import { type Decorator } from "@storybook/react"

export const InvertedBgDecorator: Decorator = (Story, parametres) => {
	const { args } = parametres
	const inverted = args?.inverted || false

	if (inverted) {
		return (
			<div className="inverted-bg">
				<Story />
			</div>
		)
	}

	return <Story />
}
