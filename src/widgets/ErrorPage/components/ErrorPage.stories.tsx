import { type Meta, type StoryObj } from "@storybook/react"
import { ErrorPage } from "./ErrorPage"

const meta: Meta<typeof ErrorPage> = {
	title: "widgets/ErrorPage",
	component: ErrorPage,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof ErrorPage>

export const Default: TypeStory = {
	args: {}
}
