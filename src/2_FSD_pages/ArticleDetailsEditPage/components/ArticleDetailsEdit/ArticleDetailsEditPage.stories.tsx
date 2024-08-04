import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ArticleDetailsEditPage } from "./ArticleDetailsPageAsync.page"

const meta: Meta<typeof ArticleDetailsEditPage> = {
	title: "pages/ArticleDetailsEditPage",
	component: ArticleDetailsEditPage,
	parameters: {
		controls: {
			exclude: ["testId"]
		}
	},
	decorators: [StoreDecorator({}), PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ArticleDetailsEditPage>

export const Create: TypeStory = {
	args: {}
}
export const Edit: TypeStory = {
	args: {
		testId: "1"
	}
}
