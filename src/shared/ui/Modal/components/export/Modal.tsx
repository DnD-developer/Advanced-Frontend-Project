import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { FC, MouseEvent, PropsWithChildren, useCallback, useEffect, useState } from "react"
import styles from "./Modal.module.scss"

export type ModalProps = {
	classNames?: string
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
} & PropsWithChildren

export const Modal: FC<ModalProps> = props => {
	const { classNames, children, isOpen, onClose, lazy = false } = props

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

	const blockCloseHandler = (event: MouseEvent) => {
		event.stopPropagation()
	}

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
			setIsMounted(true)
		}

		return () => window.removeEventListener("keydown", onKeyDown)
	}, [isOpen, onKeyDown])

	if (lazy && !isMounted) {
		return null
	}

	return (
		<div className={classNamesHelp(styles.Modal, { [styles.isOpen]: isOpen }, [classNames])}>
			<div
				className={styles.overlay}
				onClick={onCloseHandler}
			>
				<div
					className={styles.content}
					onClick={blockCloseHandler}
				>
					{children}
				</div>
			</div>
		</div>
	)
}
