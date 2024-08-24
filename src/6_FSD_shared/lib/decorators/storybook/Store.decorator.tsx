import { type DeepPartial } from "@customTypes/global.types"
import { articleReducer } from "@entities/Article/store/slices/article.slice"
import { addArticleCommentReducer } from "@features/AddArticleComment/store/slices/addArticleComment.slice"
import { editableProfileCardReducer } from "@features/EditableProfileCard/store/slices/editableProfileCard.slice"
import { filterArticlesListReducer } from "@features/FilterArticlesList/store/slices/filterArticlesList.slice"
import { StoreProvider } from "@providers/StoreProvider"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import type { Decorator } from "@storybook/react"
import { articlesListReducer } from "@widgets/ArticlesList/store/slices/articlesList.slice"
import { commentsArticleDetailsReducer } from "@widgets/CommentsArticleDetails/store/slices/commentsArticleDetails.slice"

const asyncReducersDefault: DeepPartial<ReducersMapObject<mainStateAsyncMap>> = {
	articleDetails: articleReducer,
	editableProfileCard: editableProfileCardReducer,
	commentsArticleDetails: commentsArticleDetailsReducer,
	addArticleComment: addArticleCommentReducer,
	articlesListStateMap: articlesListReducer,
	filterArticlesList: filterArticlesListReducer
}

export const StoreDecorator = (
	initialState: DeepPartial<mainStateMap>,
	asyncReducers?: DeepPartial<ReducersMapObject<mainStateAsyncMap>>
): Decorator => {
	const asyncReducersDynamic = {
		...asyncReducersDefault,
		...asyncReducers
	}

	return Story => {
		const state: DeepPartial<mainStateMap> =
			Story().props?.auth ?
				{
					...initialState,
					user: {
						authData: {
							id: "1",
							userName: "Lucifer",
							avatar: "https://i.pinimg.com/originals/f0/f8/fe/f0f8fe0e76824fd544a9154b995fb01d.jpg"
						}
					}
				}
			:	initialState

		return (
			<StoreProvider
				initialState={state as mainStateMap}
				asyncReducers={asyncReducersDynamic as ReducersMapObject<mainStateAsyncMap>}
			>
				<Story />
			</StoreProvider>
		)
	}
}
