import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { RatingCard } from "./RatingCard"

const meta: Meta<typeof RatingCard> = {
	title: "entities/Rating/RatingCard",
	component: RatingCard,
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof RatingCard>

export const Default: TypeStory = {
	args: {
		isFeedback: true,
		titleFeedback: "Введи отзыв",
		title: "Как вам?"
	}
}
