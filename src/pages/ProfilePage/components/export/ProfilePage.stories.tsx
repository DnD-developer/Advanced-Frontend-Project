import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.Decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ProfilePage } from "./ProfileAsync.page"

const meta: Meta<typeof ProfilePage> = {
	title: "pages/ProfilePage",
	component: ProfilePage,
	decorators: [PageDecorator, StoreDecorator({ profile: {} })]
}

export default meta

type TypeStory = StoryObj<typeof ProfilePage>

export const Default: TypeStory = {
	args: {}
}
