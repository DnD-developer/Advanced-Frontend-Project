import { rtkBaseApi } from "@api/rtkBase.api"
import type { notificationData } from "../types/notificationData.type"

const fetchNotificationsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getNotification: build.query<notificationData[], void>({
			query: () => {
				return {
					url: "/notifications",
					params: {
						_expand: "user"
					}
				}
			}
		})
	}),
	overrideExisting: false
})

export const { useGetNotificationQuery } = fetchNotificationsRtkq
