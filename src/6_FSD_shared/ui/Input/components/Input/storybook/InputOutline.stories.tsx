import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Input, InputTheme } from "../Input"

const meta: Meta<typeof Input> = {
	title: "shared/Input/Outline",
	component: Input,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Input>

export const Outline: TypeStory = {
	args: {
		value: "userName",
		theme: InputTheme.OUTLINE
	},
	decorators: [ContainerDecorator]
}

export const OutlineInverted: TypeStory = {
	args: {
		value: "userName",
		theme: InputTheme.OUTLINE,
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}

export const OutlineWithLabel: TypeStory = {
	args: {
		value: "userName",
		theme: InputTheme.OUTLINE,
		label: "User Name"
	},
	decorators: [ContainerDecorator]
}

export const OutlineWithLabelInverted: TypeStory = {
	args: {
		value: "userName",
		theme: InputTheme.OUTLINE,
		label: "User Name",
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}
