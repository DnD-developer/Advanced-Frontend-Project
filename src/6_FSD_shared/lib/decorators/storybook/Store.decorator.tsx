import { DeepPartial } from "@customTypes/global.types"
import { articleReducer } from "@entities/Article/store/slices/article.slice"
import { editableProfileCardReducer } from "@features/EditableProfileCard/store/slices/editableProfileCard.slice"
import { StoreProvider } from "@providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { Decorator } from "@storybook/react"
import { commentsArticleDetailsReducer } from "@widgets/CommentsArticleDetails/store/slices/commentsArticleDetails.slice"

const asyncReducersDefault: DeepPartial<ReducersMapObject<mainStateAsyncMap>> = {
	articleDetails: articleReducer,
	editableProfileCard: editableProfileCardReducer,
	commentsArticleDetails: commentsArticleDetailsReducer
}

export const StoreDecorator = (
	initialState: DeepPartial<mainStateMap>,
	asyncReducers?: DeepPartial<ReducersMapObject<mainStateAsyncMap>>
): Decorator => {
	const asyncReducersDynamic = {
		...asyncReducersDefault,
		...asyncReducers
	}

	return Story => (
		<StoreProvider
			initialState={initialState as mainStateMap}
			asyncReducers={asyncReducersDynamic as ReducersMapObject<mainStateAsyncMap>}
		>
			<Story />
		</StoreProvider>
	)
}
