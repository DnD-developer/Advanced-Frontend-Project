import type { DeepPartial } from "@customTypes/global.types"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { SideBar } from "./SideBar"

const meta: Meta<typeof SideBar> = {
	title: "widgets/SideBar",
	component: SideBar,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof SideBar>

const store: DeepPartial<mainStateMap> = {
	user: {
		_initAuthData: true,
		authData: {
			id: "1",
			userName: "Lucifer"
		}
	}
}

export const Login: TypeStory = {
	args: {
		classNames: "full-height"
	},
	decorators: [StoreDecorator(store)]
}

export const WithOutLogin: TypeStory = {
	args: {
		classNames: "full-height"
	},
	decorators: [StoreDecorator({ ...store, user: { ...store.user, authData: undefined } })]
}
