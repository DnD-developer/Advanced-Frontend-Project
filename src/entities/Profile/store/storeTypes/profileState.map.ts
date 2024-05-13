import { profileData } from "./profileData.type"

export type profileStateMap = {
	data?: profileData
	isLoading?: boolean
	error?: string
	readOnly: boolean
}
