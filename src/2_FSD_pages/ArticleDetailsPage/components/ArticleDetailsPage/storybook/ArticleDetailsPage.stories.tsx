import { ComponentPropsWithAuth, DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { articleDetailsDataType } from "@entities/Article/types/articleDetailsData.type"
import { articlesRecommendationState } from "@features/ArticlesRecommendation"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleDetailsPage } from "../ArticleDetailsAsync.page"
import dataArticle from "./ArticleDetails.data.json"
import articlesRecommendation from "./articlesRecommendation.data.json"
import commentsEntities from "./comments.data.json"

type ArticleDetailsPageCustomProps = ComponentPropsWithAuth<typeof ArticleDetailsPage>

const meta: Meta<ArticleDetailsPageCustomProps> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	decorators: [PageDecorator]
}

export default meta

const data: articleDetailsDataType = dataArticle as articleDetailsDataType

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
	commentsArticleDetails: commentsArticleDetailsState,
	articlesRecommendation: {
		entities: articlesRecommendation as articlesRecommendationState["entities"],
		ids: ["1", "2", "3"],
		isLoading: false
	}
}

type TypeStory = StoryObj<ArticleDetailsPageCustomProps>

export const Default: TypeStory = {
	args: {
		auth: true
	},
	decorators: [StoreDecorator(store)]
}
