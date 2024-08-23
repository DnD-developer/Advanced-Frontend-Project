import { UserRoles } from "../constants/userRoles.constant"

export type userDataType = {
	id: string
	userName: string
	avatar?: string
	roles: UserRoles[]
}
