import { profileCardDataType, profileStateMap } from "@entities/Profile"

export type editableProfileStateMap = {
	formData?: profileCardDataType
} & profileStateMap
