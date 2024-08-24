import { type appDispatchType } from "@store/storeTypes/appStoreType"
import { useDispatch } from "react-redux"

export const useAppDispatch = useDispatch.withTypes<appDispatchType>()
