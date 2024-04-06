import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { type FC, type PropsWithChildren, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./SideBar.module.scss"

type SideBarProps = {
	classNames?: string
} & PropsWithChildren
export const SideBar: FC<SideBarProps> = props => {
	const { classNames, children } = props

	const [collapsed, setCollapsed] = useState(false)

	const collapsedHandler = (): void => {
		setCollapsed(prev => !prev)
	}

	const { t } = useTranslation()

	return (
		<div
			data-testid="sidebar-widgets"
			className={classNamesHelp(styles.SideBar, { [styles.collapsed]: collapsed }, [
				classNames
			])}
		>
			<Button
				data-testid="sidebar-collapsed-btn"
				theme={ButtonTheme.OUTLINE}
				className={styles.toggleButton}
				onClick={collapsedHandler}
			>
				{t("toggle")}
			</Button>
			<div className={styles.switchers}>{children}</div>
		</div>
	)
}
