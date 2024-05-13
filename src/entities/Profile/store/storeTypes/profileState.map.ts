import { profileDataType } from "./profileData.type"

export type profileStateMap = {
	data?: profileDataType
	isLoading: boolean
	error?: string
	readOnly: boolean
}
