import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Text, TextTheme } from "../Text"

const meta: Meta<typeof Text> = {
	title: "shared/Text/Error",
	component: Text,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Text>

export const Error: TypeStory = {
	args: {
		title: "Title",
		text: "Text text text text text text text text",
		theme: TextTheme.ERROR
	},
	decorators: [ContainerDecorator]
}

export const ErrorOnDark: TypeStory = {
	args: {
		title: "Title",
		text: "Text text text text text text text text",
		theme: TextTheme.ERROR
	},
	decorators: [InvertedBgDecorator]
}

export const ErrorOnlyTitle: TypeStory = {
	args: {
		title: "Title",
		theme: TextTheme.ERROR
	},
	decorators: [ContainerDecorator]
}

export const ErrorOnDarkOnlyTitle: TypeStory = {
	args: {
		title: "Title",
		theme: TextTheme.ERROR
	},
	decorators: [InvertedBgDecorator]
}

export const ErrorOnlyText: TypeStory = {
	args: {
		text: "Text text text text text text text text",
		theme: TextTheme.ERROR
	},
	decorators: [ContainerDecorator]
}

export const ErrorOnDarkOnlyText: TypeStory = {
	args: {
		text: "Text text text text text text text text",
		theme: TextTheme.ERROR
	},
	decorators: [InvertedBgDecorator]
}
