import { Ring } from "@assets/index"
import { NotificationList } from "@entities/Notification"
import { Button, ButtonTheme } from "@ui/Button"
import { Popover } from "@ui/Popover"
import { memo, useMemo } from "react"
import styles from "./NotificationButtonDesktop.module.scss"

type NotificationButtonDesktopRenderProps = {
	className?: string
}
export const NotificationButtonDesktopRender = memo<NotificationButtonDesktopRenderProps>(props => {
	const { className } = props

	const content = useMemo(() => <NotificationList className={styles.list} />, [])
	const trigger = useMemo(
		() => (
			<Button theme={ButtonTheme.CLEAR}>
				<Ring className={styles.icon} />
			</Button>
		),
		[]
	)

	return (
		<Popover
			trigger={trigger}
			content={content}
			className={className}
		/>
	)
})
