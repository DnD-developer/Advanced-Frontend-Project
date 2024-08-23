import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AdminPanelPage } from "./AdminPanelAsync.page"

const meta: Meta<typeof AdminPanelPage> = {
	title: "pages/AdminPanelPage",
	component: AdminPanelPage,
	decorators: [StoreDecorator({}), PageDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AdminPanelPage>

export const Default: TypeStory = {
	args: {}
}
