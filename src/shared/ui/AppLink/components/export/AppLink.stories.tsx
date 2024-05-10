import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AppLink, AppLinkTheme } from "./AppLink"

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLink/Primary",
	component: AppLink,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AppLink>

export const Primary: TypeStory = {
	args: {
		to: "/",
		children: "Link",
		theme: AppLinkTheme.PRIMARY
	}
}

export const PrimaryInverted: TypeStory = {
	args: {
		to: "/",
		children: "Link",
		inverted: true
	},
	decorators: [InvertedBgDecorator]
}
