import { Ring } from "@assets/index"
import { NotificationList } from "@entities/Notification"
import { Button, ButtonTheme } from "@ui/Button"
import { Drawer } from "@ui/Drawer"
import { memo, useCallback, useMemo, useState } from "react"
import styles from "./NotificationButtonMobile.module.scss"

type NotificationButtonMobileRenderProps = {
	className?: string
}
export const NotificationButtonMobileRender = memo<NotificationButtonMobileRenderProps>(props => {
	const { className } = props

	const [isOpen, setIsOpen] = useState(false)

	const onOpenHandler = useCallback(() => {
		setIsOpen(true)
	}, [])

	const onCloseHandler = useCallback(() => {
		setIsOpen(false)
	}, [])

	const content = useMemo(() => <NotificationList />, [])

	return (
		<div className={className}>
			<Button
				theme={ButtonTheme.CLEAR}
				onClick={onOpenHandler}
			>
				<Ring className={styles.icon} />
			</Button>
			<Drawer
				onClose={onCloseHandler}
				content={content}
				isOpen={isOpen}
			/>
		</div>
	)
})
