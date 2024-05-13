import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { NotFoundPage } from "./NotFound.page"

const meta: Meta<typeof NotFoundPage> = {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof NotFoundPage>

export const Default: TypeStory = {
	args: {
		classNames: ""
	}
}
