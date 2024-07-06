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

export const Login: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			user: {
				authData: { userName: "admin", id: "1" }
			}
		})
	]
}

export const WithOutLogin: TypeStory = {
	args: {},
	decorators: [StoreDecorator({})]
}
