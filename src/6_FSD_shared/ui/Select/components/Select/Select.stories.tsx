import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Select, SelectTheme } from "./Select"

const meta: Meta<typeof Select> = {
	title: "shared/Select",
	component: Select,
	decorators: [CenterDecorator],
	parameters: {
		controls: {
			exclude: ["options"]
		}
	}
}

export default meta

type TypeStory = StoryObj<typeof Select>

export const Default: TypeStory = {
	argTypes: {
		theme: {
			options: [SelectTheme.OUTLINE],
			control: "radio"
		}
	},
	args: {
		options: [
			{ value: "1", content: "1" },
			{ value: "2", content: "2" }
		],
		theme: SelectTheme.OUTLINE
	}
}

export const WithLabel: TypeStory = {
	argTypes: {
		theme: {
			options: [SelectTheme.OUTLINE],
			control: "radio"
		}
	},
	args: {
		label: "Your Label",
		options: [
			{ value: "1", content: "1" },
			{ value: "2", content: "2" }
		],
		theme: SelectTheme.OUTLINE
	}
}
