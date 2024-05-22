import { type Meta, type StoryObj } from "@storybook/react"
import { SideBar } from "./SideBar"

const meta: Meta<typeof SideBar> = {
	title: "widgets/SideBar",
	component: SideBar,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof SideBar>

export const Default: TypeStory = {
	args: {
		classNames: "full-height"
	}
}
