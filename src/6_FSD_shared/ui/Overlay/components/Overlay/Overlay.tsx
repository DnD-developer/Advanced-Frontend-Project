import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import styles from "./Overlay.module.scss"

type OverlayProps = {
	className?: string
	onClose?: () => void
}
export const Overlay = memo<OverlayProps>(props => {
	const { className, onClose } = props

	return (
		<div
			onClick={onClose}
			className={classNamesHelp(styles.OverLay, {}, [className])}
		/>
	)
})
