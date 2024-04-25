import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { SimpleBgDecorator } from "@decorators/storybook/SimpleBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SwitchLangButton } from "./SwitchLangButton"

const meta: Meta<typeof SwitchLangButton> = {
	title: "widgets/SwitchLangButton",
	component: SwitchLangButton,
	decorators: [SimpleBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SwitchLangButton>

export const Default: TypeStory = {
	args: {}
}
