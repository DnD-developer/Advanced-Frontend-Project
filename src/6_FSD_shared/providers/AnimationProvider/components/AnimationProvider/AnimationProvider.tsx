import type { PropsWithChildren } from "react"
import { memo, useEffect, useMemo, useRef, useState } from "react"
import type {
	AnimationProviderContextProps,
	GestureType,
	SpringType
} from "../../context/AnimationProvider.context"
import { AnimationProviderContext } from "../../context/AnimationProvider.context"

type AnimationProviderProps = PropsWithChildren

const getAnimationsLibs = async () => {
	const libs = await Promise.all([import("@react-spring/web"), import("@use-gesture/react")])

	return libs
}

export const AnimationProvider = memo(({ children }: AnimationProviderProps) => {
	const SpringRef = useRef<SpringType>()
	const GestureRef = useRef<GestureType>()

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			const [SpringLib, GestureLib] = await getAnimationsLibs()
			SpringRef.current = SpringLib
			GestureRef.current = GestureLib
			setIsLoading(false)
		})()
	}, [])

	const animationProviderContextValue: AnimationProviderContextProps = useMemo(
		() => ({
			Spring: SpringRef.current,
			Gesture: GestureRef.current,
			isLoading
		}),
		[isLoading]
	)

	return (
		<AnimationProviderContext.Provider value={animationProviderContextValue}>
			{children}
		</AnimationProviderContext.Provider>
	)
})
