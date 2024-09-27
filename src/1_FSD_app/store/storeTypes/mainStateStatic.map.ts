import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { userStateMap } from "@entities/User"
import type { scrollPositionState } from "@features/ScrollSave"

export type mainStateStaticMap = {
	user: userStateMap
	scrollPosition: scrollPositionState
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
