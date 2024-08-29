import type { notificationData } from "../../types/notificationData.type"

export const notificationListDataMock: notificationData[] = [
	{
		id: "1",
		title: "Уведомление 1",
		description: "Произошло какое-то событие"
	},
	{
		id: "2",
		title: "Уведомление 2",
		description: "Произошло какое-то событие",
		href: "http://localhost:3000/admin"
	},
	{
		id: "3",
		title: "Уведомление 3",
		description: "Произошло какое-то событие",
		href: "http://localhost:3000/admin"
	}
]
