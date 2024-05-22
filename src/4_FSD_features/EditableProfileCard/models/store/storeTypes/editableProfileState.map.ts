import { profileDataType, profileStateMap } from "@entities/Profile"

export type editableProfileStateMap = {
	formData?: profileDataType
} & profileStateMap
