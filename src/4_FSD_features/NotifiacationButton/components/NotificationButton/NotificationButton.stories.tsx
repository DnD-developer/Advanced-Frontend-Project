import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { notificationListDataMock } from "@entities/Notification"
import { type Meta, type StoryObj } from "@storybook/react"
import { NotificationButton } from "./NotificationButton"

const meta: Meta<typeof NotificationButton> = {
	title: "features/NotificationButton",
	component: NotificationButton,
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
	decorators: [StoreDecorator({}), InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof NotificationButton>

export const Default: TypeStory = {
	args: {
		isMobileTest: false
	},
	tags: ["background"]
}
