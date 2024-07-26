import { MutableRefObject, useEffect, useMemo, useRef } from "react"

export function useInfinityScroll(callback?: () => void) {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

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
