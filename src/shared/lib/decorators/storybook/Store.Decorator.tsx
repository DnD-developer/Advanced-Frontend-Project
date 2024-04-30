import { mainStateMap } from "@app/store"
import { DeepPartial } from "@app/types/global.types"
import { StoreProvider } from "@providers/StoreProvider"
import { Decorator } from "@storybook/react"

export const StoreDecorator =
	(initialState: DeepPartial<mainStateMap>): Decorator =>
	Story => (
		<StoreProvider initialState={initialState as mainStateMap}>
			<Story />
		</StoreProvider>
	)
