import type { ComponentPropsWithAuth, DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { articleDataMock, articlesListDataMock } from "@entities/Article"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleDetailsPage } from "../ArticleDetailsAsync.page"
import commentsEntities from "./comments.data.json"

type ArticleDetailsPageCustomProps = ComponentPropsWithAuth<typeof ArticleDetailsPage>

const meta: Meta<ArticleDetailsPageCustomProps> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	decorators: [PageDecorator],
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/articles?_limit=4&_expand=user`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: articlesListDataMock.slice(0, 3)
			}
		]
	}
}

export default meta

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
		data: articleDataMock
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
