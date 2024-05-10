import { type Meta, type StoryObj } from "@storybook/react"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
import { SwitchLangButton } from "../../../SwitchLangButton/components/export/SwitchLangButton"
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
		SwitchLang: <SwitchLangButton />,
		SwitchTheme: <SwitchThemeButton />,
		classNames: "full-height"
	}
}
