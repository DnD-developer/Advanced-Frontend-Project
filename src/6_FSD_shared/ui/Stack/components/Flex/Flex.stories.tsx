import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { ContainerDecorator } from "@decorators/storybook/Container.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Flex } from "./Flex"
import styles from "./Flex.module.scss"

const meta: Meta<typeof Flex> = {
	title: "shared/Flex",
	component: Flex,
	parameters: {
		controls: {
			exclude: ["children", "className"]
		}
	},
	decorators: [ContainerDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Flex>

export const Default: TypeStory = {
	argTypes: {
		align: {
			options: ["center", "flexStart", "flexEnd"],
			control: "select"
		},
		justify: {
			options: ["center", "flexStart", "flexEnd", "spaceBetween", "spaceAround"],
			control: "select"
		},
		direction: {
			options: ["row", "column"],
			control: "select"
		},
		gap: {
			options: ["gap8", "gap12", "gap16", "gap24", "gap32"],
			control: "select"
		}
	},
	args: {
		align: "flexStart",
		justify: "flexStart",
		direction: "row",
		gap: "gap8",
		widthMax: true,
		className: styles.storyContainer,
		children: (
			<>
				<div>Text</div>
				<div>Text</div>
				<div>Text</div>
				<div>Text</div>
				<div>Text</div>
			</>
		)
	}
}
