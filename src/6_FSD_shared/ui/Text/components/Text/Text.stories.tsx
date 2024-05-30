import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { TextAlign, TextSize, TextTheme } from "./Test.type"
import { Text } from "./Text"

const meta: Meta<typeof Text> = {
	title: "shared/Text",
	component: Text,
	argTypes: {
		size: {
			options: [TextSize.NORMAL, TextSize.BIG],
			control: "radio"
		},
		align: {
			options: [TextAlign.LEFT, TextAlign.CENTER, TextAlign.RIGHT],
			control: "radio"
		},
		theme: {
			options: [TextTheme.ERROR, TextTheme.PRIMARY],
			control: "radio"
		}
	},
	decorators: [InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Text>

export const Default: TypeStory = {
	args: {
		theme: TextTheme.PRIMARY,
		align: TextAlign.LEFT,
		size: TextSize.NORMAL,
		inverted: false,
		title: "Title",
		text: "Text text text text text text"
	}
}

export const OnlyTitle: TypeStory = {
	args: {
		theme: TextTheme.PRIMARY,
		align: TextAlign.LEFT,
		size: TextSize.NORMAL,
		inverted: false,
		title: "Title"
	}
}

export const OnlyText: TypeStory = {
	args: {
		theme: TextTheme.PRIMARY,
		align: TextAlign.LEFT,
		size: TextSize.NORMAL,
		inverted: false,
		text: "Text text text text text text"
	}
}
