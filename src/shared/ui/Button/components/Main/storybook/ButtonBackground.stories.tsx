import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button, ButtonTheme } from "../Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button/Background",
	component: Button,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Button>

export const Background: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND
	},
	decorators: [InvertedBgDecorator]
}

export const BackgroundDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
		disabled: true
	},
	decorators: [InvertedBgDecorator]
}

export const InvertedBackground: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
		inverted: true
	}
}

export const InvertedBackgroundDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
		disabled: true,
		inverted: true
	}
}
