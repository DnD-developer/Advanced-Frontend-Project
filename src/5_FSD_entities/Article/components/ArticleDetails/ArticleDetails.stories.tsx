import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleDetails } from "./ArticleDetails"

const meta: Meta<typeof ArticleDetails> = {
	title: "entities/ArticleDetails",
	component: ArticleDetails,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticleDetails>

export const Default: TypeStory = {
	args: {}
}
