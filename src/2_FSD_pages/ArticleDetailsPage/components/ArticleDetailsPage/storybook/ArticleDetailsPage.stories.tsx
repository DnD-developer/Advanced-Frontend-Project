import { DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { articleDataType } from "@entities/Article/types/articleData.type"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleDetailsPage } from "../ArticleDetailsAsync.page"
import dataArticle from "./ArticleDetails.data.json"
import commentsEntities from "./CommentList.data.json"

const meta: Meta<typeof ArticleDetailsPage> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	decorators: [PageDecorator]
}

export default meta

const data: articleDataType = dataArticle as articleDataType

const commentListState = {
	entities: commentsEntities,
	ids: ["1", "2", "3"],
	error: undefined,
	isLoading: false
}

const store: DeepPartial<mainStateMap> = {
	articleDetails: {
		data: data
	},
	commentList: commentListState
}

type TypeStory = StoryObj<typeof ArticleDetailsPage>

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(store)]
}
