import { type Meta, type StoryObj } from "@storybook/react"
import { Header } from "./Header"

const meta: Meta<typeof Header> = {
	title: "widgets/Header",
	component: Header,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Header>

export const Default: TypeStory = {
	args: {}
}
