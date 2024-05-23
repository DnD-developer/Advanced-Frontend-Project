import { createSelector } from "@reduxjs/toolkit"
import { editableProfileStateMap } from "../../storeTypes/editableProfileState.map"
import { getEditableProfileCardSelector } from "../getEditableProfileCard/getEditableProfileCard.selector"

export const getEditableProfileCardErrorSelector = createSelector(
	getEditableProfileCardSelector,
	(state?: editableProfileStateMap) => state?.errors
)
