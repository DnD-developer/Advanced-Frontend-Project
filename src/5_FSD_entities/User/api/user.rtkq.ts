import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { RequestPaths } from "@api/constants/requestPath.constant"
import type { userDataType } from "../types/userData.type"
import type { userSettingsData } from "../types/userSettingsData.type"

type saveUserSettingsParams = {
	settings: userSettingsData
	id: userDataType["id"]
}

const userRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		saveUserSettings: build.mutation<userDataType, saveUserSettingsParams>({
			query: ({ id, settings }) => ({
				url: `${RequestPaths.USER}/${id}`,
				method: "PATCH",
				body: { settings: settings }
			})
		}),
		getUser: build.query<userDataType, userDataType["id"]>({
			query: id => {
				return {
					url: `${RequestPaths.USER}/${id}`
				}
			}
		})
	}),
	overrideExisting: false
})

export const getUserRtkq = userRtkq.endpoints.getUser.initiate
export const saveUserSettingsRtkq = userRtkq.endpoints.saveUserSettings.initiate
