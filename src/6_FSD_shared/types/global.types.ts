import { ComponentProps, JSXElementConstructor } from "react"
import { JSX } from "react/jsx-runtime"
import IntrinsicElements = JSX.IntrinsicElements

export type DeepPartial<T> =
	T extends object ?
		{
			[P in keyof T]?: DeepPartial<T[P]>
		}
	:	T

export type ComponentPropsWithAuth<
	T extends keyof IntrinsicElements | JSXElementConstructor<appAny>
> = ComponentProps<T> & { auth: boolean }
