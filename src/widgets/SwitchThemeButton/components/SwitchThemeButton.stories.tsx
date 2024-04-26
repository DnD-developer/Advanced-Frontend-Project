import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBgDecorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SwitchThemeButton } from "./SwitchThemeButton"

const meta: Meta<typeof SwitchThemeButton> = {
	title: "widgets/SwitchThemeButton",
	component: SwitchThemeButton,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SwitchThemeButton>

export const Default: TypeStory = {
	args: {},
	decorators: [InvertedBgDecorator]
}
