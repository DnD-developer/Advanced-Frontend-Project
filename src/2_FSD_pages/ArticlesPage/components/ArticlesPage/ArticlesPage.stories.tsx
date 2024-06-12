import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticlesPage } from "./ArticlesAsync.page"

const meta: Meta<typeof ArticlesPage> = {
	title: "pages/ArticlesPage",
	component: ArticlesPage,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticlesPage>

export const Default: TypeStory = {
	args: {}
}
