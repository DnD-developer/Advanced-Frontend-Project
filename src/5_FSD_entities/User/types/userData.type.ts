import type { UserRoles } from "../constants/userRoles.constant"
import type { featureFlagsType } from "@config/featureFlags"

export type userDataType = {
	id: string
	userName: string
	avatar?: string
	features: featureFlagsType
	roles: UserRoles[]
}
