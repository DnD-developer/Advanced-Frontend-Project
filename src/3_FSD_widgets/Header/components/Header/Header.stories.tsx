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
				authData: {
					userName: "admin",
					id: "1",
					avatar: "https://i.pinimg.com/originals/f0/f8/fe/f0f8fe0e76824fd544a9154b995fb01d.jpg"
				}
			}
		})
	]
}

export const WithOutLogin: TypeStory = {
	args: {},
	decorators: [StoreDecorator({})]
}
