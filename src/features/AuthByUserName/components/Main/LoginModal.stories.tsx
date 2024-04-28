import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { LoginModal } from "./LoginModal"

const meta: Meta<typeof LoginModal> = {
	title: "features/LoginModal",
	component: LoginModal,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof LoginModal>

export const Default: TypeStory = {
	args: {
		isOpen: true
	}
}
