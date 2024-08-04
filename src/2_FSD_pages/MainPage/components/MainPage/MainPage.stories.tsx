import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { MainPage } from "./MainAsync.page"

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	decorators: [StoreDecorator({}), PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof MainPage>

export const Default: TypeStory = {
	args: {}
}
