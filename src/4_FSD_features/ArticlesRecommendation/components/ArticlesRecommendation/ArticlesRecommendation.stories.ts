import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { articlesListDataMock } from "@entities/Article/lib/mocks/articlesListData.mock"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticlesRecommendation } from "./ArticlesRecommendation"

const meta: Meta<typeof ArticlesRecommendation> = {
	title: "features/ArticlesRecommendation",
	component: ArticlesRecommendation,
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/articles?_limit=4&_expand=user`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: articlesListDataMock.slice(0, 3)
			}
		]
	},
	decorators: [StoreDecorator({}), CenterDecorator, PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticlesRecommendation>

export const Default: TypeStory = {
	args: {}
}
