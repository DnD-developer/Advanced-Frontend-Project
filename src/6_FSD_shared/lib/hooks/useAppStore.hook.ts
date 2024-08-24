import type { appStoreType } from "@store/storeTypes/appStoreType"
import { useStore } from "react-redux"

export const useAppStore = useStore.withTypes<appStoreType>()
