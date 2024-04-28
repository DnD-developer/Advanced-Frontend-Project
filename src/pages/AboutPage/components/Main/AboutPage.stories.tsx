import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import AboutPage from "./About.page"

const meta: Meta<typeof AboutPage> = {
	title: "pages/AboutPage",
	component: AboutPage,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AboutPage>

export const Default: TypeStory = {
	args: {}
}
