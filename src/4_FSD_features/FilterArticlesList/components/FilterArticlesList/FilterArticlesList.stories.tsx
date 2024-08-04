import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { FilterArticlesList } from "./FilterArticlesList"

const meta: Meta<typeof FilterArticlesList> = {
	title: "features/FilterArticlesList",
	component: FilterArticlesList,
	parameters: {
		controls: {
			exclude: ["callback"]
		}
	},
	decorators: [StoreDecorator({}), CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof FilterArticlesList>

export const Default: TypeStory = {
	args: {
		//eslint-disable-next-line
		callback: () => {}
	}
}
