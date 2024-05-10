import { EnhancedStore } from "@reduxjs/toolkit"
import { reducerManagerType } from "../reducerManager"
import { mainStateMap } from "./mainState.map"

export type storeAppType = {
	reducerManager: reducerManagerType
} & EnhancedStore<mainStateMap>
