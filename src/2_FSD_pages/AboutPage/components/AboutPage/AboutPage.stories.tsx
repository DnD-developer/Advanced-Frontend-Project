import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AboutPage } from "./AboutAsync.page"

const meta: Meta<typeof AboutPage> = {
	title: "pages/AboutPage",
	component: AboutPage,
	decorators: [StoreDecorator({}), PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AboutPage>

export const Default: TypeStory = {
	args: {}
}
