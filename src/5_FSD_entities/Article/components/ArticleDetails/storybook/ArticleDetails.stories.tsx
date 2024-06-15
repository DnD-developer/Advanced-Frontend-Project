import { DeepPartial } from "@customTypes/global.types"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { articleDataType } from "../../../types/ArticleData.type"
import { ArticleDetails } from "../ArticleDetails"
import dataArticle from "./ArticleDetails.data.json"

const meta: Meta<typeof ArticleDetails> = {
	title: "entities/ArticleDetails",
	component: ArticleDetails,
	decorators: []
}

export default meta

const data: articleDataType = dataArticle as articleDataType

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
