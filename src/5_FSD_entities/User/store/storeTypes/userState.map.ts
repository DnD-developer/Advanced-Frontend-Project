import type { userDataType } from "../../types/userData.type"

export type userStateMap = {
	error?: string
	authData?: userDataType
	_initAuthData: boolean
}
