import { createSelector } from "@reduxjs/toolkit"
import type { editableProfileStateMap } from "../../storeTypes/editableProfileState.map"
import { getEditableProfileCardSelector } from "../getEditableProfileCard/getEditableProfileCard.selector"

export const getEditableProfileCardReadOnlySelector = createSelector(
	getEditableProfileCardSelector,
	(state?: editableProfileStateMap) => state?.readOnly || false
)
