import { createSelector } from "@reduxjs/toolkit"
import type { editableProfileStateMap } from "../../storeTypes/editableProfileState.map"
import { getEditableProfileCardSelector } from "../getEditableProfileCard/getEditableProfileCard.selector"

export const getEditableProfileCardFormDataSelector = createSelector(
	getEditableProfileCardSelector,
	(state?: editableProfileStateMap) => state?.formData
)
