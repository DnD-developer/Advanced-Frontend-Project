import type { rtkBaseApi } from "@api/rtkBase.api"
import type { userStateMap } from "@entities/User"
import type { scrollPositionState } from "@features/ScrollSave"

export type mainStateStaticMap = {
	user: userStateMap
	scrollPosition: scrollPositionState
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
