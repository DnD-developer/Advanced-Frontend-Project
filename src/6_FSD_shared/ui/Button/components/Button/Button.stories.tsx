import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ButtonTheme } from "../../constants/Button.constant"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	decorators: [InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Button>

export const Default: TypeStory = {
	argTypes: {
		theme: {
			options: [ButtonTheme.PRIMARY, ButtonTheme.OUTLINE, ButtonTheme.CLEAR],
			control: "radio"
		}
	},
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARY,
		disabled: false,
		inverted: false
	}
}

export const Background: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.BACKGROUND,
		disabled: false,
		inverted: false
	},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || []), "theme"]
		}
	},
	tags: ["background"]
}
