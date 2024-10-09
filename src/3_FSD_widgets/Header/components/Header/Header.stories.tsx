import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { notificationListDataMock } from "@entities/Notification"
import { userDataMock } from "@entities/User"
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
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}/notifications?_expand=user`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: notificationListDataMock
			}
		]
	},
	args: {
		isMobileTest: false
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: userDataMock({})
			}
		})
	]
}

export const WithOutLogin: TypeStory = {
	args: {},
	decorators: [StoreDecorator({})]
}
