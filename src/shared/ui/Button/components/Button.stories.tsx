import { CenterDecorator } from "@lib/decorators/storybook/Center.decorator"
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

export const Outline: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.OUTLINE
	}
}

export const Clear: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.CLEAR
	}
}

export const PrimaryOutline: TypeStory = {
	args: {
		children: "Text",
		theme: ButtonTheme.PRIMARYOUTLINE
	}
}
