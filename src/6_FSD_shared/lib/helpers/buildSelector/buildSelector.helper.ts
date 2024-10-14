import { useCallback } from "react"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { useSelector } from "react-redux"

type selectorType<T, Args extends any[]> = (state: mainStateMap, ...args: Args) => T
type hookType<T, Args extends any[]> = (...args: Args) => T
type resultType<T, Args extends any[]> = [hookType<T, Args>, selectorType<T, Args>]

export function buildSelector<T, Args extends any[]>(
	selector: selectorType<T, Args>
): resultType<T, Args> {
	const useAppSelector = (...args: Args) =>
		useSelector(useCallback((state: mainStateMap) => selector(state, ...args), [args]))

	return [useAppSelector, selector]
}
