import { DeepPartial } from "@customTypes/global.types"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { articleDetailsDataType } from "../../../types/articleDetailsData.type"
import { ArticleDetails } from "../ArticleDetails"
import dataArticle from "./article.data.json"

const meta: Meta<typeof ArticleDetails> = {
	title: "entities/Article/ArticleDetails",
	component: ArticleDetails,
	decorators: []
}

export default meta

const data: articleDetailsDataType = dataArticle as articleDetailsDataType

const store: DeepPartial<mainStateMap> = {
	articleDetails: {
		isLoading: false,
		error: undefined,
		data: data
	}
}

type TypeStory = StoryObj<typeof ArticleDetails>

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(store)]
}

export const Loading: TypeStory = {
	args: {},
	decorators: [StoreDecorator({ ...store, articleDetails: { isLoading: true } })]
}

export const Error: TypeStory = {
	args: {},
	decorators: [StoreDecorator({ ...store, articleDetails: { error: "error" } })]
}
