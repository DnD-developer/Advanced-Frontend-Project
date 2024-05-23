import { profileDataType } from "./profileData.type"

export type profileStateMap = {
	data?: profileDataType
	isLoading: boolean
	errors?: (ServerErrors | ValidateErrors)[]
	readOnly: boolean
}

export enum ValidateErrors {
	AVATAR_ERROR = "AVATAR_ERROR",
	USERNAME_ERROR = "USERNAME_ERROR",
	FIRST_NAME = "FIRST_NAME",
	LAST_NAME = "LAST_NAME",
	AGE_ERROR = "AGE_ERROR",
	CITY_ERROR = "CITY_ERROR",
	CURRENCY_ERROR = "CURRENCY_ERROR",
	COUNTRY_ERROR = "COUNTRY_ERROR"
}

export enum ServerErrors {
	SERVER_NOT_FOUND = "SERVER_NOT_FOUND"
}
