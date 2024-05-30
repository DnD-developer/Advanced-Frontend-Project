import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Header } from "./Header"

const meta: Meta<typeof Header> = {
	title: "widgets/Header",
	component: Header,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Header>

export const WithOutLogin: TypeStory = {
	args: {},
	decorators: [StoreDecorator({})]
}

export const WithLogin: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			user: {
				authData: { userName: "admin", id: "1" }
			}
		})
	]
}
