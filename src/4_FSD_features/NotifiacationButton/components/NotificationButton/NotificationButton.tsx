import { Ring } from "@assets/index"
import { NotificationList } from "@entities/Notofication"
import { Button, ButtonTheme } from "@ui/Button"
import { Popover } from "@ui/Popover"
import { memo, useMemo } from "react"
import styles from "./NotificationButton.module.scss"

type NotificationButtonProps = {
	className?: string
}
export const NotificationButton = memo<NotificationButtonProps>(props => {
	const { className } = props

	const trigger = useMemo(
		() => (
			<Button theme={ButtonTheme.CLEAR}>
				<Ring className={styles.icon} />
			</Button>
		),
		[]
	)

	const content = useMemo(() => <NotificationList />, [])

	return (
		<Popover
			trigger={trigger}
			content={content}
			className={className}
		/>
	)
})
