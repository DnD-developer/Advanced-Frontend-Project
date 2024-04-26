import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Modal } from "./Modal"

const meta: Meta<typeof Modal> = {
	title: "shared/Modal",
	component: Modal,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Modal>

export const Default: TypeStory = {
	args: {
		children: "Login To Application",
		isOpen: true
	}
}
