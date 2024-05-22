import { AxiosInstance } from "axios"
import { NavigateFunction } from "react-router-dom"
import { mainStateMap } from "./mainState.map"

export type thunkExtraType = {
	api: AxiosInstance
	navigate?: NavigateFunction
}

export type thunkConfigType<R> = {
	rejectValue: R
	extra: thunkExtraType
	state: mainStateMap
}

export type errorResponseType = { message?: string; response?: { status?: number } }
