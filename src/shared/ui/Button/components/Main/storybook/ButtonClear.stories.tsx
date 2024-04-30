import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button, ButtonTheme } from "../Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button/Clear",
	component: Button,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Button>

export const Clear: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR
	}
}

export const ClearDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR,
		disabled: true
	}
}

export const InvertedClear: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR,
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}

export const InvertedClearDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR,
		inverted: true,
		disabled: true
	},
	decorators: [InvertedBgDecorator]
}
