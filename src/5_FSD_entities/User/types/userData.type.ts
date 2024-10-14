import type { UserRoles } from "../constants/userRoles.constant"
import type { featureFlagsType } from "@config/featureFlags"
import type { userSettingsData } from "./userSettingsData.type"

export type userDataType = {
	id: string
	userName: string
	avatar?: string
	features: featureFlagsType
	settings: userSettingsData
	roles: UserRoles[]
}
