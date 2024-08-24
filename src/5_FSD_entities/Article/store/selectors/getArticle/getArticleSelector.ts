import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const getArticleSelector = (state: mainStateMap) => state.articleDetails
