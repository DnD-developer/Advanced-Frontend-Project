import { ReactNode, ReactPortal } from "react"
import { createPortal } from "react-dom"

export type PortalProps = {
	children: ReactNode
	element?: HTMLElement
}

export const Portal = (props: PortalProps): ReactPortal => {
	const { children, element = document.querySelector(".app") || document.body } = props

	return createPortal(children, element)
}
