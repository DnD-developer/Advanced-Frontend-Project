import { rtkBaseApi } from "@api/instances/rtkBase.api"

import type { articleDetailsDataType } from "@entities/Article"
import { RequestPaths } from "@api/constants/requestPath.constant"

const fetchArticleRecommendationRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getArticleRecommendation: build.query<articleDetailsDataType[], void>({
			query: () => {
				return {
					url: RequestPaths.ARTICLES,
					params: {
						_limit: 4,
						_expand: "user"
					}
				}
			}
		})
	}),
	overrideExisting: false
})

export const { useGetArticleRecommendationQuery } = fetchArticleRecommendationRtkq
