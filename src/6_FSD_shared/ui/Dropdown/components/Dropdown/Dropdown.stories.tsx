import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button } from "../../../Button"
import { Dropdown } from "./Dropdown"

const meta: Meta<typeof Dropdown> = {
	title: "shared/Dropdown",
	component: Dropdown,
	parameters: {
		controls: {
			exclude: ["triggerNode", "items"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Dropdown>

export const Default: TypeStory = {
	args: {
		triggerNode: <Button>{"trigger"}</Button>,
		items: [
			{
				content: "Нажми на меня",
				//eslint-disable-next-line
				onClick: () => console.info("1")
			},
			{
				content: "ссылка",
				href: "/"
			}
		]
	}
}
