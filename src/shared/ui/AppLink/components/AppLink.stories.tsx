import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AppLink, AppLinkTheme } from "./AppLink"

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLink",
	component: AppLink,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AppLink>

export const Primary: TypeStory = {
	args: {
		to: "/",
		name: "Link",
		theme: AppLinkTheme.PRIMARY
	}
}

export const Inverted: TypeStory = {
	args: {
		to: "/",
		name: "Link",
		theme: AppLinkTheme.INVERTED
	}
}
