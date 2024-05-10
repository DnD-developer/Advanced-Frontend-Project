import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Text, TextTheme } from "../Text"

const meta: Meta<typeof Text> = {
	title: "shared/Text/Primary",
	component: Text,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Text>

export const Primary: TypeStory = {
	args: {
		title: "Title",
		text: "Text text text text text text text text",
		theme: TextTheme.PRIMARY
	},
	decorators: [ContainerDecorator]
}

export const PrimaryInverted: TypeStory = {
	args: {
		title: "Title",
		text: "Text text text text text text text text",
		inverted: true,
		theme: TextTheme.PRIMARY
	},
	decorators: [InvertedBgDecorator]
}

export const PrimaryOnlyTitle: TypeStory = {
	args: {
		title: "Title",
		theme: TextTheme.PRIMARY
	},
	decorators: [ContainerDecorator]
}

export const PrimaryInvertedOnlyTitle: TypeStory = {
	args: {
		title: "Title",
		inverted: true,
		theme: TextTheme.PRIMARY
	},
	decorators: [InvertedBgDecorator]
}

export const PrimaryOnlyText: TypeStory = {
	args: {
		text: "Text text text text text text text text",
		theme: TextTheme.PRIMARY
	},
	decorators: [ContainerDecorator]
}

export const PrimaryInvertedOnlyText: TypeStory = {
	args: {
		text: "Text text text text text text text text",
		inverted: true,
		theme: TextTheme.PRIMARY
	},
	decorators: [InvertedBgDecorator]
}
