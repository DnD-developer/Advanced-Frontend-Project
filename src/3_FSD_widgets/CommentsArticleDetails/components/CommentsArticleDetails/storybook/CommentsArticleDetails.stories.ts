import { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { CommentsArticleDetails } from "../CommentsArticleDetails"
import commentsEntities from "./comments.data.json"

const meta: Meta<typeof CommentsArticleDetails> = {
	title: "widgets/CommentsArticleDetails",
	component: CommentsArticleDetails,
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof CommentsArticleDetails>

const commentsState = {
	entities: commentsEntities,
	ids: ["1", "2", "3"],
	error: undefined,
	isLoading: false
}

const state: DeepPartial<mainStateMap> = {
	commentsArticleDetails: commentsState
}

export const Loading: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			...state,
			commentsArticleDetails: { ...commentsState, isLoading: true }
		})
	]
}

export const Error: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({
			...state,
			commentsArticleDetails: { ...commentsState, error: "no data" }
		})
	]
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}
