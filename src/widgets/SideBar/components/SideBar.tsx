import { ClassNames } from "@lib/helpers/ClassNames"
import { Button, ButtonTheme } from "@ui/Button"
import { FC, PropsWithChildren, useState } from "react"
import styles from "./SideBar.module.scss"

interface SideBarProps extends PropsWithChildren {
	classNames?: string
}
export const SideBar: FC<SideBarProps> = props => {
	const { classNames, children } = props

	const [collapsed, setCollapsed] = useState(false)

	const collapsedHandler = () => setCollapsed(prev => !prev)

	return (
		<div
			className={ClassNames(styles.SideBar, { [styles.collapsed]: collapsed }, [classNames])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={styles.toggleButton}
				onClick={collapsedHandler}>
				Toggle
			</Button>
			<div className={styles.switchers}>{children}</div>
		</div>
	)
}