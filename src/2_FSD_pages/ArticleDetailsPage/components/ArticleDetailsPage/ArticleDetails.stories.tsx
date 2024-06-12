import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleDetailsPage } from "./ArticleDetailsAsync.page"

const meta: Meta<typeof ArticleDetailsPage> = {
	title: "pages/ArticleDetailsPage",
	component: ArticleDetailsPage,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticleDetailsPage>

export const Default: TypeStory = {
	args: {}
}
