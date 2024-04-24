import { type Meta, type StoryObj } from "@storybook/react"
import { SwitchLangButton } from "../../SwitchLangButton/components/SwitchLangButton"
import { SwitchThemeButton } from "../../SwitchThemeButton"
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
		children: (
			<>
				<SwitchThemeButton />
				<SwitchLangButton classNames="switch-right-button" />
			</>
		),
		classNames: "full-height"
	}
}
