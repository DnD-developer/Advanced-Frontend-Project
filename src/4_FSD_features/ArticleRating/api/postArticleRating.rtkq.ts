import { rtkBaseApi } from "@api/rtkBase.api"
import type { ratingData } from "@entities/Rating"

export type postArticleRatingParamsType = {
	id: string
	userId: string
	articleId: string
} & ratingData

const postArticleRatingRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		postArticleRating: build.mutation<ratingData[], postArticleRatingParamsType>({
			query: body => ({
				url: "/article-ratings",
				method: "POST",
				body: body
			})
		})
	}),
	overrideExisting: false
})

export const { usePostArticleRatingMutation } = postArticleRatingRtkq
