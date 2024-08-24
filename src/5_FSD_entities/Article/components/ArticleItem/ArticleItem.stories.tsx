import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleItemViews } from "../../constants/ArticleItemViews.constant"
import { articleDataMock } from "../../lib/mocks/articleData.mock"
import { ArticleItem } from "./ArticleItem"

const meta: Meta<typeof ArticleItem> = {
	title: "entities/Article/ArticleItem",
	component: ArticleItem,
	parameters: {
		controls: {
			exclude: ["article", "error"]
		}
	},
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticleItem>

export const Default: TypeStory = {
	argTypes: {
		view: {
			options: [ArticleItemViews.PlATES, ArticleItemViews.DETAILED],
			control: "radio"
		}
	},
	args: {
		view: ArticleItemViews.PlATES,
		isLoading: false,
		error: undefined,
		article: articleDataMock
	}
}

export const Error: TypeStory = {
	parameters: {
		controls: {
			exclude: ["isLoading", "article", "error"]
		}
	},
	argTypes: {
		view: {
			options: [ArticleItemViews.PlATES, ArticleItemViews.DETAILED],
			control: "radio"
		}
	},
	args: {
		view: ArticleItemViews.PlATES,
		isLoading: false,
		error: "error",
		article: articleDataMock
	}
}
