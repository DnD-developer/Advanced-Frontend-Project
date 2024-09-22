import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { ratingDataMock } from "@entities/Rating/lib/mocks/ratingData.mock"
import { type Meta, type StoryObj } from "@storybook/react"
import ArticleRating from "./ArticleRating"

const meta: Meta<typeof ArticleRating> = {
	title: "features/ArticleRating",
	component: ArticleRating,
	parameters: {
		controls: {
			exclude: ["articleId"]
		}
	},
	decorators: [StoreDecorator({}), CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticleRating>

export const Default: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/article-ratings?articleId=1&userId=1`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: ratingDataMock
			}
		]
	},
	args: {
		articleId: "1"
	}
}

export const PostRating: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/article-ratings?articleId=1&userId=1`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: []
			},
			{
				url: `${__BASE_URL__}/article-ratings`,
				method: "POST",
				status: 200,
				delay: 1000,
				response: []
			}
		]
	},
	args: {
		articleId: "1"
	}
}

export const PostRatingError: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/article-ratings?articleId=1&userId=1`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: []
			},
			{
				url: `${__BASE_URL__}/article-ratings`,
				method: "POST",
				status: 503,
				delay: 1000,
				response: []
			}
		]
	},
	args: {
		articleId: "1"
	}
}

export const Error: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/article-ratings?articleId=1&userId=1`,
				method: "GET",
				status: 503,
				delay: 2000,
				response: ratingDataMock
			}
		]
	},
	args: {
		articleId: "1"
	}
}
