import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useModal } from "@hooks/useModal.hook"
import type { ReactNode } from "react"
import { memo } from "react"
import { Card } from "../../../Card"
import { Overlay } from "../../../Overlay"
import { Portal } from "../../../Portal"
import styles from "./Drawer.module.scss"

type DrawerProps = {
	className?: string
	content?: ReactNode
	isOpen: boolean
	lazy?: boolean
	onClose?: () => void
}
export const Drawer = memo<DrawerProps>(props => {
	const { className, content, isOpen = false, onClose, lazy } = props

	const useModalProps = {
		isOpen,
		onClose
	}
	const { onCloseHandler, isMounted } = useModal(useModalProps)

	const mods: Mods = {
		[styles.opened]: isOpen
	}

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal>
			<div className={classNamesHelp(styles.Drawer, mods, [])}>
				<Overlay onClose={onCloseHandler} />
				<Card className={classNamesHelp(styles.content, {}, [className])}>{content}</Card>
			</div>
		</Portal>
	)
})
