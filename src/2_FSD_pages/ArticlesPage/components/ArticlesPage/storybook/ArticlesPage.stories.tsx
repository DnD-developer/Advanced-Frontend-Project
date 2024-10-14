import type { DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import type { articlesListStateMap } from "@widgets/ArticlesList"
import { ArticlesPage } from "../ArticlesAsync.page"
import articles from "./articles.data.json"

const meta: Meta<typeof ArticlesPage> = {
	title: "pages/ArticlesPage",
	component: ArticlesPage,
	decorators: [PageDecorator]
}

export default meta

const stateArticlesList: DeepPartial<articlesListStateMap> = {
	entities: articles as unknown as articlesListStateMap["entities"],
	ids: ["1", "2", "3"]
}

const state: DeepPartial<mainStateMap> = {
	articlesListStateMap: stateArticlesList
}

type TypeStory = StoryObj<typeof ArticlesPage>

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}
