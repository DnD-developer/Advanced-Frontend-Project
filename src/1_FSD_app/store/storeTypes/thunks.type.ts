import { AxiosInstance } from "axios"
import { mainStateMap } from "./mainState.map"

export type thunkExtraType = {
	api: AxiosInstance
}

export type thunkConfigType<R> = {
	rejectValue: R
	extra: thunkExtraType
	state: mainStateMap
}

export type errorResponseType = { message?: string; response?: { status?: number } }
