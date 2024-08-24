import type { DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import type { articlesListStateMap } from "../../store/storeTypes/articlesListState.map"
import articles from "./articles.data.json"
import { ArticlesList } from "./ArticlesList"

const meta: Meta<typeof ArticlesList> = {
	title: "widgets/ArticlesList",
	component: ArticlesList,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticlesList>

const stateArticlesList: DeepPartial<articlesListStateMap> = {
	entities: articles as articlesListStateMap["entities"],
	ids: ["1", "2", "3"]
}

const state: DeepPartial<mainStateMap> = {
	articlesListStateMap: stateArticlesList
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}

export const NoData: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			...state,
			articlesListStateMap: { ...stateArticlesList, entities: {}, ids: [] }
		})
	]
}

export const Error: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			...state,
			articlesListStateMap: {
				...stateArticlesList,
				entities: {},
				ids: [],
				error: "error Text"
			}
		})
	]
}

export const IsLoading: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			...state,
			articlesListStateMap: { ...stateArticlesList, isLoading: true }
		})
	]
}
