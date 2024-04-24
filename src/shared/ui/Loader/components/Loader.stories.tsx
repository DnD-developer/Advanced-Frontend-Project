import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Loader } from "./Loader"

const meta: Meta<typeof Loader> = {
	title: "shared/Loader",
	component: Loader,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Loader>

export const Default: TypeStory = {
	args: {}
}
