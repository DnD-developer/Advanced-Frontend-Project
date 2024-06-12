import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SelectTheme } from "../../constants/Select.constant"
import { Select } from "./Select"

const meta: Meta<typeof Select> = {
	title: "shared/Select",
	component: Select,
	decorators: [CenterDecorator],
	argTypes: {
		theme: {
			options: [SelectTheme.OUTLINE],
			control: "radio"
		}
	},
	parameters: {
		controls: {
			exclude: ["options"]
		}
	}
}

export default meta

type TypeStory = StoryObj<typeof Select>

export const Default: TypeStory = {
	args: {
		options: [
			{ value: "1", content: "1" },
			{ value: "2", content: "2" }
		],
		theme: SelectTheme.OUTLINE
	}
}

export const WithLabel: TypeStory = {
	args: {
		label: "Your Label",
		options: [
			{ value: "1", content: "1" },
			{ value: "2", content: "2" }
		],
		theme: SelectTheme.OUTLINE
	}
}
