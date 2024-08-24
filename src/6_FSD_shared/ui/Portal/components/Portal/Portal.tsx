import type { ReactNode, ReactPortal } from "react"
import { memo } from "react"
import { createPortal } from "react-dom"

export type PortalProps = {
	children: ReactNode
	element?: HTMLElement
}

export const Portal = memo<PortalProps>((props): ReactPortal => {
	const { children, element = document.querySelector(".app") || document.body } = props

	return createPortal(children, element)
})
