import type { ComponentProps, JSXElementConstructor } from "react"
import { JSX } from "react/jsx-runtime"
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit"
import IntrinsicElements = JSX.IntrinsicElements

export type DeepPartial<T> =
	T extends object ?
		{
			[P in keyof T]?: DeepPartial<T[P]>
		}
	:	T

export type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T
}

export type ComponentPropsWithAuth<
	T extends keyof IntrinsicElements | JSXElementConstructor<appAny>
> = ComponentProps<T> & { auth: boolean }

export type AsyncThunkConfig = {
	state?: unknown
	dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>
	extra?: unknown
	rejectValue?: unknown
	serializedErrorType?: unknown
	pendingMeta?: unknown
	fulfilledMeta?: unknown
	rejectedMeta?: unknown
}
