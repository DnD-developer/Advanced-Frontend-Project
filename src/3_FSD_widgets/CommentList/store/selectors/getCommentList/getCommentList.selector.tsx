import { mainStateMap } from "@store/storeTypes/mainState.map"

export const getCommentListSelector = (state: mainStateMap) => state?.commentList
