import { type Meta, type StoryObj } from "@storybook/react"
import { ArticlesList } from "./ArticlesList"

const meta: Meta<typeof ArticlesList> = {
	title: "widget/ArticlesList",
	component: ArticlesList,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof ArticlesList>

export const Default: TypeStory = {
	args: {}
}
