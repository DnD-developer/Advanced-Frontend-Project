import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SwitchThemeButton } from "./SwitchThemeButton"

const meta: Meta<typeof SwitchThemeButton> = {
	title: "features/SwitchThemeButton",
	component: SwitchThemeButton,
	decorators: [InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SwitchThemeButton>

export const Default: TypeStory = {
	args: {},
	tags: ["background"]
}
