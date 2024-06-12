import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SkeletonTheme } from "../../constants/Skeleton.constant"
import { Skeleton } from "./Skeleton"

const meta: Meta<typeof Skeleton> = {
	title: "shared/Skeleton",
	component: Skeleton,
	decorators: [CenterDecorator],
	argTypes: {
		theme: {
			options: [SkeletonTheme.RECTANGLE, SkeletonTheme.CIRCLE],
			control: "radio"
		}
	}
}

export default meta

type TypeStory = StoryObj<typeof Skeleton>

export const Default: TypeStory = {
	args: {
		theme: SkeletonTheme.RECTANGLE,
		width: "200px",
		height: "200px"
	}
}
