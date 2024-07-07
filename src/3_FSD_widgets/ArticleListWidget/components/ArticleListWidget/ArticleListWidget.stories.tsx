import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleListWidget } from "./ArticleListWidget"

const meta: Meta<typeof ArticleListWidget> = {
	title: "widget/ArticleListWidget",
	component: ArticleListWidget,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof ArticleListWidget>

export const Default: TypeStory = {
	args: {}
}
