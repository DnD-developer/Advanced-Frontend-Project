import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { notificationDataMock } from "../../lib/mocks/notificationData.mock"
import { NotificationItem } from "./NotificationItem"

const meta: Meta<typeof NotificationItem> = {
	title: "entities/Notification/NotificationItem",
	component: NotificationItem,
	parameters: {
		controls: {
			exclude: ["data"]
		}
	},
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof NotificationItem>

export const Default: TypeStory = {
	args: {
		data: notificationDataMock,
		isLoading: false
	}
}
