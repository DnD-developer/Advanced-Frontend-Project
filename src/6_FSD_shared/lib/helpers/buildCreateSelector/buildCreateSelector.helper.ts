import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { createSelector } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

type selectorType<T> = (state: mainStateMap) => T
type reselectFuncType<T, L, Args extends any[]> = (state: T, ...args: Args) => L
type hookType<L, Args extends any[]> = (...args: Args) => L

type resultType<L, Args extends any[]> = [
	hookType<L, Args>,
	(...args: Args) => (state: mainStateMap) => L
]

export function buildCreateSelector<T, L, Args extends any[]>(
	selector: selectorType<T>[],
	reselectFunc: reselectFuncType<T, L, Args>
): resultType<L, Args> {
	const generalSelector = (...args: Args) =>
		createSelector(selector, (state: T) => reselectFunc(state, ...args))

	const useAppCreateSelector: hookType<L, Args> = (...args: Args) => {
		const generalSelectorWithArgs = generalSelector(...args)

		return useSelector(generalSelectorWithArgs)
	}

	return [useAppCreateSelector, generalSelector]
}
