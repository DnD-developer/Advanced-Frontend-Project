import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { userDataMock } from "@entities/User"
import { type Meta, type StoryObj } from "@storybook/react"
import { AvatarDropdown } from "./AvatarDropdown"

const meta: Meta<typeof AvatarDropdown> = {
	title: "features/AvatarDropdown",
	component: AvatarDropdown,
	decorators: [
		CenterDecorator,
		StoreDecorator({
			user: {
				authData: userDataMock({})
			}
		})
	]
}

export default meta

type TypeStory = StoryObj<typeof AvatarDropdown>

export const Default: TypeStory = {
	args: {}
}
