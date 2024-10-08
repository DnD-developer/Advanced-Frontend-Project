import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { articlesListDataMock } from "@entities/Article/lib/mocks/articlesListData.mock"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticlesRecommendation } from "./ArticlesRecommendation"

const meta: Meta<typeof ArticlesRecommendation> = {
	title: "features/ArticlesRecommendation",
	component: ArticlesRecommendation,
	decorators: [StoreDecorator({}), CenterDecorator, PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticlesRecommendation>

export const Default: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/articles?_limit=4&_expand=user`,
				method: "GET",
				status: 200,
				delay: 0,
				response: articlesListDataMock.slice(0, 3)
			}
		]
	},
	args: {}
}
export const Loading: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/articles?_limit=4&_expand=user`,
				method: "GET",
				status: 200,
				delay: 60000,
				response: articlesListDataMock.slice(0, 3)
			}
		]
	},
	args: {}
}
export const Error: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/articles?_limit=4&_expand=user`,
				method: "GET",
				status: 503,
				delay: 0,
				response: articlesListDataMock.slice(0, 3)
			}
		]
	},
	args: {}
}
