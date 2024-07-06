import { DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { articleDataType } from "@entities/Article/types/articleData.type"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { ArticleDetailsPage } from "../ArticleDetailsAsync.page"
import dataArticle from "./ArticleDetails.data.json"
import commentsEntities from "./comments.data.json"

type ArticleDetailsPageCustomProps = ComponentProps<typeof ArticleDetailsPage> & { auth: boolean }

const meta: Meta<ArticleDetailsPageCustomProps> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	decorators: [PageDecorator]
}

export default meta

const data: articleDataType = dataArticle as articleDataType

const commentsArticleDetailsState = {
	entities: commentsEntities,
	ids: ["1", "2", "3"],
	error: undefined,
	isLoading: false
}

const store: DeepPartial<mainStateMap> = {
	addArticleComment: {
		error: "",
		isLoading: false,
		text: ""
	},
	articleDetails: {
		data: data
	},
	commentsArticleDetails: commentsArticleDetailsState
}

type TypeStory = StoryObj<ArticleDetailsPageCustomProps>

export const Default: TypeStory = {
	args: {
		auth: true
	},
	decorators: [StoreDecorator(store)]
}
