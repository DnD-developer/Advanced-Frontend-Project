import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button } from "../../../Button"
import { Card } from "../../../Card"
import { Popover } from "./Popover"

const meta: Meta<typeof Popover> = {
	title: "shared/Popover",
	component: Popover,
	parameters: {
		controls: {
			exclude: ["trigger", "content"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Popover>

export const Default: TypeStory = {
	args: {
		trigger: <Button>{"Press"}</Button>,
		content: (
			<>
				<Card>{"First Item"}</Card> <Card>{"Second Item"}</Card>
			</>
		)
	}
}
