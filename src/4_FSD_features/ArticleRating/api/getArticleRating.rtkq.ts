import { rtkBaseApi } from "@api/rtkBase.api"
import type { ratingData } from "@entities/Rating/types/ratingData.type"

type getArticleRatingParams = {
	articleId: string
	userId: string
}

const getArticleRatingRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getArticleRating: build.query<ratingData[], getArticleRatingParams>({
			query: ({ articleId, userId }) => {
				return {
					url: "/article-ratings",
					params: {
						articleId,
						userId
					}
				}
			}
		})
	}),
	overrideExisting: false
})

export const { useGetArticleRatingQuery } = getArticleRatingRtkq
