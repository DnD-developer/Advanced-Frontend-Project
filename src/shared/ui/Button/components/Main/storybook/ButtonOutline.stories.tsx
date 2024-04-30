import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button, ButtonTheme } from "../Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button/Outline",
	component: Button,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Button>

export const Outline: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE
	}
}

export const OutlineDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		disabled: true
	}
}

export const InvertedOutline: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}

export const InvertedOutlineDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE,
		disabled: true,
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}
