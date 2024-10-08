import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { useSelector } from "react-redux"

type SelectorType<T> = (state: mainStateMap) => T

export function buildSelector<T>(selector: SelectorType<T>) {
	const useAppSelector = () => useSelector(selector)

	return [useAppSelector, selector]
}
