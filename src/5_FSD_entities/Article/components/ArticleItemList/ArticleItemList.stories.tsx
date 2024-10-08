import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articlesListDataMock } from "../../lib/mocks/articlesListData.mock"
import { ArticleItemList } from "./ArticleItemList"

const meta: Meta<typeof ArticleItemList> = {
	title: "entities/Article/ArticleItemList",
	component: ArticleItemList,
	decorators: [PageDecorator],
	parameters: {
		controls: {
			exclude: ["articles"]
		}
	},
	argTypes: {
		view: {
			options: [ArticleItemViews.PlATES, ArticleItemViews.DETAILED],
			control: "radio"
		}
	}
}

export default meta

type TypeStory = StoryObj<typeof ArticleItemList>

export const Default: TypeStory = {
	args: {
		view: ArticleItemViews.PlATES,
		isLoading: false,
		articles: articlesListDataMock
	}
}
export const NotFound: TypeStory = {
	args: {
		view: ArticleItemViews.PlATES,
		isLoading: false,
		articles: []
	}
}
export const Error: TypeStory = {
	parameters: {
		controls: {
			exclude: ["error", "isLoading", "articles"]
		}
	},
	args: {
		view: ArticleItemViews.PlATES,
		error: "error",
		isLoading: false,
		articles: []
	}
}
