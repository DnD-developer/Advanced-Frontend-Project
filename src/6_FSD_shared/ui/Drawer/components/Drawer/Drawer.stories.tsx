import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Card } from "../../../Card"
import { VStack } from "../../../Stack"
import { Text } from "../../../Text"
import { Drawer } from "./Drawer"

const meta: Meta<typeof Drawer> = {
	title: "shared/Drawer",
	component: Drawer,
	parameters: {
		controls: {
			exclude: ["content"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Drawer>

export const Default: TypeStory = {
	args: {
		isOpen: true,
		content: (
			<VStack gap={"gap16"}>
				<Card>
					<Text title={"Text Txt Txt"} />
				</Card>
				<Card>
					<Text title={"Text Txt Txt"} />
				</Card>
				<Card>
					<Text title={"Text Txt Txt"} />
				</Card>
				<Card>
					<Text title={"Text Txt Txt"} />
				</Card>
			</VStack>
		)
	}
}
