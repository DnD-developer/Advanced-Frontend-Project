import { Copy } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback } from "react"
import styles from "./CopyButton.module.scss"

type CopyButtonProps = {
	className?: string
	text: string
}
export const CopyButton = memo<CopyButtonProps>(props => {
	const { className, text } = props

	const onCopyHandler = useCallback(() => {
		navigator.clipboard.writeText(text).then(() => null)
	}, [text])

	return (
		<Button
			className={classNamesHelp(styles.CopyButton, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={onCopyHandler}
		>
			<Copy className={styles.copyIcon} />
		</Button>
	)
})
