import { useContext } from "react"
import type { AnimationProviderContextProps } from "../../context/AnimationProvider.context"
import { AnimationProviderContext } from "../../context/AnimationProvider.context"

export function useAnimation() {
	return useContext(AnimationProviderContext) as Required<AnimationProviderContextProps>
}
