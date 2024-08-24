import { CenterDecorator } from "@decorators/storybook/Center.decorator"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useArgs } from "@storybook/preview-api"
import { type Meta, type StoryObj } from "@storybook/react"
import { TabThemes } from "../../constant/TabThemes.constant"
import type { TabsItemType } from "./Tabs"
import { Tabs } from "./Tabs"

const meta: Meta<typeof Tabs> = {
	title: "shared/Tabs",
	component: Tabs,
	parameters: {
		controls: {
			exclude: ["tabs", "value", "className", "onTabClick"]
		}
	},
	argTypes: {
		theme: {
			options: [TabThemes.OUTLINE],
			control: "radio"
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Tabs>

const tabs: TabsItemType<string>[] = [
	{ content: "Tabs1", value: "Tabs1" },
	{ content: "Tabs2", value: "Tabs2" },
	{ content: "Tabs3", value: "Tabs3" },
	{ content: "Tabs4", value: "Tabs4" }
]

export const Default: TypeStory = {
	args: {
		tabs: tabs,
		value: "Tabs2",
		theme: TabThemes.OUTLINE
	},
	render: function Render(argsStory) {
		const [{ value }, updateArgs] = useArgs()

		const onChangeTab = (tab: TabsItemType<string>) => {
			updateArgs({ value: tab.value })
		}

		return (
			<Tabs
				{...argsStory}
				value={value}
				onTabClick={onChangeTab}
			/>
		)
	}
}
