import { rtkBaseApi } from "@api/rtkBase.api"
import { PagesPaths } from "@config/routes/routePaths"
import { articleDetailsDataType } from "@entities/Article"

const fetchArticleRecommendationRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getArticleRecommendation: build.query<articleDetailsDataType[], void>({
			query: () => {
				return {
					url: PagesPaths.ARTICLES,
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
