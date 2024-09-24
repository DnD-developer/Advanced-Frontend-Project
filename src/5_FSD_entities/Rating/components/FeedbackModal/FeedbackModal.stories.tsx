import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { FeedbackModal } from "./FeedbackModal"

const meta: Meta<typeof FeedbackModal> = {
	title: "entities/Rating/FeedbackModal",
	component: FeedbackModal,
	parameters: {
		controls: {
			exclude: ["isOpen"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof FeedbackModal>

export const Default: TypeStory = {
	args: {
		isOpen: true,
		isLoading: false
	}
}
