import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ForbiddenPage } from "./ForbiddenAsync.page"

const meta: Meta<typeof ForbiddenPage> = {
	title: "pages/ForbiddenPage",
	component: ForbiddenPage,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ForbiddenPage>

export const Default: TypeStory = {
	args: {}
}
