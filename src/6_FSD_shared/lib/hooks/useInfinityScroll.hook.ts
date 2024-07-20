import { useEffect, useMemo, useRef } from "react"

export function useInfinityScroll(callback?: () => void) {
	const wrapperRef = useRef(null)
	const triggerRef = useRef(null)

	useEffect(() => {
		const element = triggerRef.current

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries

				if (entry.isIntersecting) {
					callback?.()
				}
			},
			{
				root: wrapperRef.current,
				rootMargin: "1px"
			}
		)
		if (element) observer.observe(element)

		return () => {
			if (element) observer.unobserve(element)
		}
	}, [callback, triggerRef, wrapperRef])

	return useMemo(() => [wrapperRef, triggerRef], [])
}
