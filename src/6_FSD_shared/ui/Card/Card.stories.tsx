import { FAKE_AVATAR } from "@constants/common.constant"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
	title: "shared/Card",
	component: Card,
	decorators: [CenterDecorator, ContainerDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Card>

export const Default: TypeStory = {
	args: {
		children: (
			<img
				src={FAKE_AVATAR}
				alt="fake avatar"
				style={{ width: "300px", height: "300px" }}
			/>
		)
	}
}
