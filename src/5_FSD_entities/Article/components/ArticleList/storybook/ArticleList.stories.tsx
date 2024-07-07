import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleItemViews } from "../../../constants/ArticleItemViews.constant"
import { articleListStateMap } from "../../../store/storeTypes/articleListState.map"
import { ArticleList } from "../ArticleList"
import articles from "./articles.data.json"

const meta: Meta<typeof ArticleList> = {
	title: "entities/Article/ArticleList",
	component: ArticleList,
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

type TypeStory = StoryObj<typeof ArticleList>

export const Default: TypeStory = {
	args: {
		view: ArticleItemViews.PlATES,
		isLoading: false,
		articles: articles as articleListStateMap["articles"]
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
