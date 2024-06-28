import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { InputTheme } from "../../constants/Input.constant"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
	title: "shared/Input",
	component: Input,
	argTypes: {
		theme: {
			options: [InputTheme.OUTLINE],
			control: "radio"
		}
	},
	decorators: [ContainerDecorator, InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Input>

export const Default: TypeStory = {
	args: {
		value: "userName",
		theme: InputTheme.OUTLINE,
		inverted: false
	}
}

export const WithLabel: TypeStory = {
	args: {
		value: "userName",
		theme: InputTheme.OUTLINE,
		label: "User Name",
		inverted: false
	}
}
