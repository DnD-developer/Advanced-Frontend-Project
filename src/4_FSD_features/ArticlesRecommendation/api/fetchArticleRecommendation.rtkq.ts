import { rtkBaseApi } from "@api/rtkBase.api"
import { RequestPaths } from "@constants/common.constant"

import type { articleDetailsDataType } from "@entities/Article"

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
