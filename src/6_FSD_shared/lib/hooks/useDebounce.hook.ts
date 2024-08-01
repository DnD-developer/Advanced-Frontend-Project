import { TimeoutId } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types"
import { useCallback, useRef } from "react"

export function useDebounce(callback: (...args: any[]) => void, delay = 400) {
	const timer = useRef<TimeoutId>()

	return useCallback(
		(...args: any[]) => {
			if (timer.current) {
				clearTimeout(timer.current)
			}

			timer.current = setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay]
	)
}
