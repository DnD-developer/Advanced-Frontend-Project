import { Popover as HPopover, PopoverButton, PopoverPanel } from "@headlessui/react"
import type { AnchorProps } from "@headlessui/react/dist/internal/floating"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { ReactNode } from "react"
import { memo, useMemo } from "react"
import { Card } from "../../../Card"
import styles from "./Popover.module.scss"

type PopoverProps = {
	className?: string
	trigger: ReactNode
	content: ReactNode
}
export const Popover = memo<PopoverProps>(props => {
	const { className, trigger, content } = props

	const anchorOptions: AnchorProps = useMemo(
		() => ({
			to: "bottom end",
			gap: 8
		}),
		[]
	)

	return (
		<HPopover className={classNamesHelp(styles.Popover, {}, [className, "relative"])}>
			<PopoverButton as={"div"}>{trigger}</PopoverButton>
			<PopoverPanel anchor={anchorOptions}>
				<Card className={styles.content}>{content}</Card>
			</PopoverPanel>
		</HPopover>
	)
})
