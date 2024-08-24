import type { DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { articleDataMock } from "../../lib/mocks/articleData.mock"
import type { articleDetailsDataType } from "../../types/articleDetailsData.type"
import { ArticleDetails } from "./ArticleDetails"

const meta: Meta<typeof ArticleDetails> = {
	title: "entities/Article/ArticleDetails",
	component: ArticleDetails,
	decorators: [PageDecorator]
}

export default meta

const data: articleDetailsDataType = articleDataMock

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
