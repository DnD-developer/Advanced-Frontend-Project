import { DeepPartial } from "@customTypes/global.types"
import { articleReducer } from "@entities/Article/store/slices/article.slice"
import { addArticleCommentReducer } from "@features/AddArticleComment/store/slices/addArticleComment.slice"
import { articlesRecommendationReducer } from "@features/ArticlesRecommendation/store/slice/articlesRecommendation.slice"
import { editableProfileCardReducer } from "@features/EditableProfileCard/store/slices/editableProfileCard.slice"
import { filterArticlesListReducer } from "@features/FilterArticlesList/store/slices/filterArticlesList.slice"
import { StoreProvider } from "@providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateMap } from "@store/storeTypes/mainState.map"
import { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { Decorator } from "@storybook/react"
import { articlesListReducer } from "@widgets/ArticlesList/store/slices/articlesList.slice"
import { commentsArticleDetailsReducer } from "@widgets/CommentsArticleDetails/store/slices/commentsArticleDetails.slice"

const asyncReducersDefault: DeepPartial<ReducersMapObject<mainStateAsyncMap>> = {
	articleDetails: articleReducer,
	editableProfileCard: editableProfileCardReducer,
	commentsArticleDetails: commentsArticleDetailsReducer,
	addArticleComment: addArticleCommentReducer,
	articlesListStateMap: articlesListReducer,
	filterArticlesList: filterArticlesListReducer,
	articlesRecommendation: articlesRecommendationReducer
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
				{ ...initialState, user: { authData: { id: "1" } } }
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
