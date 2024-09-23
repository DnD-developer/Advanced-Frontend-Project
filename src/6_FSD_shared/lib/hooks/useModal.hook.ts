import { useCallback, useEffect, useState } from "react"

type useModalProps = {
	isOpen: boolean
	onClose?: () => void
}

export function useModal({ isOpen = false, onClose }: useModalProps) {
	const [isMounted, setIsMounted] = useState(false)

	const onCloseHandler = useCallback(() => {
		onClose?.()
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onCloseHandler()
			}
		},
		[onCloseHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
			setIsMounted(true)
		}

		return () => window.removeEventListener("keydown", onKeyDown)
	}, [isOpen, onKeyDown])

	return {
		isMounted,
		onCloseHandler
	}
}
