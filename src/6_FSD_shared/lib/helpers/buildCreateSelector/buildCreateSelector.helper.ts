import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"

type SelectorType<T> = (state: mainStateMap) => T
type reselectFuncType<P, L> = (state: P) => L

export function buildCreateSelector<T, L>(
	selector: SelectorType<T>[],
	reselectFunc: reselectFuncType<T, L>
) {
	const generalSelector = createSelector(selector, reselectFunc)

	const useAppCreateSelector = () => useSelector(generalSelector)

	return { useAppCreateSelector, generalSelector }
}
