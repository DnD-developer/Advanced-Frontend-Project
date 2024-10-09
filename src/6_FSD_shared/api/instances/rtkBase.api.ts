import { USER_TOKEN } from "@constants/localStorage.constant"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkBaseApi = createApi({
	reducerPath: "rtkBaseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: __API_URL__,
		prepareHeaders: headers => {
			const authorization = localStorage.getItem(USER_TOKEN) || ""

			if (headers) {
				headers.set("Authorization", authorization)
			}
			return headers
		}
	}),
	endpoints: () => ({})
})
