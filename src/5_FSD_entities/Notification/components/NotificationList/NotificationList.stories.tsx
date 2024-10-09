import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { notificationListDataMock } from "../../lib/mocks/notificationListData.mock"
import { NotificationList } from "./NotificationList"

const meta: Meta<typeof NotificationList> = {
	title: "entities/Notification/NotificationList",
	component: NotificationList,

	decorators: [StoreDecorator({}), ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof NotificationList>

export const Default: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}/notifications?_expand=user`,
				method: "GET",
				status: 200,
				delay: 0,
				response: notificationListDataMock
			}
		]
	},
	args: {}
}

export const Loading: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}/notifications?_expand=user`,
				method: "GET",
				status: 200,
				delay: 60000,
				response: notificationListDataMock
			}
		]
	},
	args: {}
}

export const Error: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}/notifications?_expand=user`,
				method: "GET",
				status: 503,
				delay: 0,
				response: notificationListDataMock
			}
		]
	},
	args: {}
}
