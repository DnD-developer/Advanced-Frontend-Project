import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { RequestPaths } from "@api/constants/requestPath.constant"
import type { userDataType } from "../types/userData.type"

const userRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
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
