import { AxiosInstance } from "axios"
import { NavigateFunction } from "react-router-dom"

export type thunkExtraType = {
	api: AxiosInstance
	navigate?: NavigateFunction
}

export type thunkConfigType<R> = {
	rejectValue: R
	extra: thunkExtraType
}

export type errorResponseType = { message?: string; response?: { status?: number } }
