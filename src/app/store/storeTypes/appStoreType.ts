import { reducerManagerType } from "../reducerManager"
import { storeCreator } from "../store"

export type appStoreType = {
	reducerManager: reducerManagerType
} & ReturnType<typeof storeCreator>

export type appDispatchType = appStoreType["dispatch"]
