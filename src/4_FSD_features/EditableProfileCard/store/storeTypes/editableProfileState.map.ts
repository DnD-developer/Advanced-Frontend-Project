import { profileCardDatatype, profileStateMap } from "@entities/Profile"

export type editableProfileStateMap = {
	formData?: profileCardDatatype
} & profileStateMap
