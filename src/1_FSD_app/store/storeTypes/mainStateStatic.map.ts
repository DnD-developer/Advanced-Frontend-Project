import { rtkBaseApi } from "@api/rtkBase.api"
import { userStateMap } from "@entities/User"
import { scrollPositionState } from "@features/ScrollSave"

export type mainStateStaticMap = {
	user: userStateMap
	scrollPosition: scrollPositionState
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
