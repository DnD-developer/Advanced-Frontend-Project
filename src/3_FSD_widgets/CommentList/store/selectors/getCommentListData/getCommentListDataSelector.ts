import { mainStateMap } from "@store/storeTypes/mainState.map"
import { commentListAdapter } from "../../slices/commentList.slice"

const initialState = commentListAdapter.getInitialState()

export const getCommentList = commentListAdapter.getSelectors<mainStateMap>(
	state => state?.commentList || initialState
)

export const { selectAll: getCommentListDataSelector } = getCommentList
