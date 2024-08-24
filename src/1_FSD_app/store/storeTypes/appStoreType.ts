import { type reducerManagerType } from "../reducerManager"
import type { storeCreator } from "../store"

export type appStoreType = {
	reducerManager: reducerManagerType
} & ReturnType<typeof storeCreator>

export type appDispatchType = appStoreType["dispatch"]
