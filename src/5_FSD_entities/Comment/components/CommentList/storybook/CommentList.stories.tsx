import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { commentDataType } from "../../../types/commentData.type"
import { CommentList } from "../CommentList"
import comments from "./comments.data.json"

const meta: Meta<typeof CommentList> = {
	title: "entities/Comment/CommentList",
	component: CommentList,
	parameters: {
		controls: {
			exclude: ["isLoading", "comments", "error"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof CommentList>

export const Default: TypeStory = {
	args: {
		comments: comments as commentDataType[],
		isLoading: false,
		error: undefined
	}
}

export const Loading: TypeStory = {
	args: {
		comments: comments as commentDataType[],
		isLoading: true,
		error: undefined
	}
}

export const Error: TypeStory = {
	args: {
		comments: comments as commentDataType[],
		isLoading: false,
		error: "error"
	}
}
