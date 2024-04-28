import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBgDecorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button, ButtonTheme } from "./Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Button>

export const Primary: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY
	}
}

export const InvertedPrimary: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.INVERTEDPRIMARY
	},
	decorators: [InvertedBgDecorator]
}

export const Outline: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE
	}
}

export const InvertedOutline: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.INVERTEDOUTLINE
	},
	decorators: [InvertedBgDecorator]
}

export const Clear: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR
	}
}

export const InvertedClear: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.INVERTEDClEAR
	},
	decorators: [InvertedBgDecorator]
}

export const Background: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND
	},
	decorators: [InvertedBgDecorator]
}
export const InvertedBackground: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.INVERTEDBACKGROUND
	}
}
