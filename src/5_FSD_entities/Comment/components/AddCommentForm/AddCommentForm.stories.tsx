import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AddCommentForm } from "./AddCommentForm"

const meta: Meta<typeof AddCommentForm> = {
	title: "entities/Comment/AddCommentForm",
	component: AddCommentForm,
	parameters: {
		controls: {
			exclude: ["error"]
		}
	},
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AddCommentForm>

export const Default: TypeStory = {
	args: {
		text: "",
		isLoading: false
	}
}

export const Error: TypeStory = {
	args: {
		text: "",
		isLoading: false,
		error: "error"
	}
}
