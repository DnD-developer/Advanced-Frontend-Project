import { FAKE_AVATAR } from "@constants/common.constant"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
	title: "shared/Card",
	component: Card,
	parameters: {
		controls: {
			exclude: ["style"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Card>

export const Default: TypeStory = {
	args: {
		style: { maxWidth: "330px" },
		children: (
			<img
				src={FAKE_AVATAR}
				alt="fake avatar"
				style={{ width: "300px", height: "300px" }}
			/>
		)
	}
}
