import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import MainPage from "./Main.page"

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	decorators: [PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof MainPage>

export const Default: TypeStory = {
	args: {}
}
