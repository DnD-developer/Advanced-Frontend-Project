import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SwitchLangButton } from "./SwitchLangButton"

const meta: Meta<typeof SwitchLangButton> = {
	title: "features/SwitchLangButton",
	component: SwitchLangButton,
	decorators: [InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SwitchLangButton>

export const Default: TypeStory = {
	args: {},
	tags: ["background"]
}
