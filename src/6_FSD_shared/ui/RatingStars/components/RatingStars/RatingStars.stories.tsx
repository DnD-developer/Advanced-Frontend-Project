import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { RatingStars } from "./RatingStars"

const meta: Meta<typeof RatingStars> = {
	title: "shared/RatingStars",
	component: RatingStars,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof RatingStars>

export const Default: TypeStory = {
	args: {
		rating: 1
	}
}
