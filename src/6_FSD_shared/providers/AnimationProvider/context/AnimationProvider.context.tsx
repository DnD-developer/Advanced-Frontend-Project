import { createContext } from "react"

//eslint-disable-next-line
export type SpringType = typeof import("@react-spring/web")
//eslint-disable-next-line
export type GestureType = typeof import("@use-gesture/react")

export type AnimationProviderContextProps = {
	Spring?: SpringType
	Gesture?: GestureType
	isLoading?: boolean
}

export const AnimationProviderContext = createContext<AnimationProviderContextProps>({})
