import { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { CommentList } from "../CommentList"
import commentsEntities from "./commentList.data.json"

const meta: Meta<typeof CommentList> = {
	title: "widgets/CommentList",
	component: CommentList,
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof CommentList>

const commentListState = {
	entities: commentsEntities,
	ids: ["1", "2", "3"],
	error: undefined,
	isLoading: false
}

const state: DeepPartial<mainStateMap> = {
	commentList: commentListState
}

export const Loading: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({ ...state, commentList: { ...commentListState, isLoading: true } })
	]
}

export const Error: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator({ ...state, commentList: { ...commentListState, error: "no data" } })
	]
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}
