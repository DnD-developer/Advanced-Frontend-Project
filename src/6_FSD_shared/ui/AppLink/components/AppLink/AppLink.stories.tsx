import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { InvertedBgDecorator } from "@decorators/storybook/InvertedBg.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AppLink } from "./AppLink"
import { AppLinkTheme } from "./AppLink.type"

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLink",
	component: AppLink,
	argTypes: {
		theme: {
			options: [AppLinkTheme.PRIMARY],
			control: "radio"
		}
	},
	parameters: {
		controls: {
			exclude: [...(preview.parameters?.controls?.exclude || []), "to"]
		}
	},
	decorators: [InvertedBgDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AppLink>

export const Default: TypeStory = {
	args: {
		to: "/",
		children: "Link",
		theme: AppLinkTheme.PRIMARY
	}
}
