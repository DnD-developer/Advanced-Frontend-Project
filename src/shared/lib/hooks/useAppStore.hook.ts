import { storeAppType } from "@store/storeTypes/storeApp.type"
import { useStore } from "react-redux"

export const useAppStore = useStore.withTypes<storeAppType>()
