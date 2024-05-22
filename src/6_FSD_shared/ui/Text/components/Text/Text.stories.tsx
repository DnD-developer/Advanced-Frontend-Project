import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Text, TextAlign, TextSize, TextTheme } from "./Text"

const meta: Meta<typeof Text> = {
	title: "shared/Text",
	component: Text,
	decorators: [InvertedBgDecorator, ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Text>

export const Default: TypeStory = {
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
	args: {
		theme: TextTheme.PRIMARY,
		align: TextAlign.LEFT,
		size: TextSize.NORMAL,
		inverted: false,
		title: "Title"
	}
}

export const OnlyText: TypeStory = {
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
	args: {
		theme: TextTheme.PRIMARY,
		align: TextAlign.LEFT,
		size: TextSize.NORMAL,
		inverted: false,
		text: "Text text text text text text"
	}
}
