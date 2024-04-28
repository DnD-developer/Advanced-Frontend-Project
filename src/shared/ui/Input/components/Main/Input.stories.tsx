import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Input, InputTheme } from "./Input"

const meta: Meta<typeof Input> = {
	title: "shared/Input/default",
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
		theme: InputTheme.OUTLINEINVERTED
	},
	decorators: [InvertedBgDecorator]
}
