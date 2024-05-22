import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Avatar, AvatarSize, AvatarTheme } from "./Avatar"

const meta: Meta<typeof Avatar> = {
	title: "shared/Avatar",
	component: Avatar,
	decorators: [CenterDecorator],
	parameters: {
		controls: {
			exclude: ["alt"]
		}
	}
}

export default meta

type TypeStory = StoryObj<typeof Avatar>

export const Default: TypeStory = {
	argTypes: {
		theme: {
			options: [AvatarTheme.CIRCLE],
			control: "radio"
		},
		size: {
			options: [AvatarSize.SMALL, AvatarSize.MIDDLE, AvatarSize.LARGE],
			control: "radio"
		}
	},
	args: {
		theme: AvatarTheme.CIRCLE,
		size: AvatarSize.MIDDLE,
		alt: "avatar",
		src: "https://i.pinimg.com/originals/0d/cb/1f/0dcb1f45db2d5a624e5da74b74f3ddb9.png"
	}
}
