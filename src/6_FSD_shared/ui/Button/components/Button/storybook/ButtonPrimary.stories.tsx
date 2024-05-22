import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button, ButtonTheme } from "../Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button/Primary",
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

export const PrimaryDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY,
		disabled: true
	}
}

export const InvertedPrimary: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY,
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}

export const InvertedPrimaryDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY,
		inverted: true,
		disabled: true
	},
	decorators: [InvertedBgDecorator]
}

export const ErrorPrimary: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY,
		error: true
	},
	decorators: [InvertedBgDecorator]
}

export const ErrorPrimaryDisabled: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY,
		error: true,
		disabled: true
	},
	decorators: [InvertedBgDecorator]
}
