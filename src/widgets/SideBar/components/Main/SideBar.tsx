import ArrowLeft from "@assets/icons/arrow-left.svg"
import ArrowRight from "@assets/icons/arrow-right.svg"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Children, type FC, type PropsWithChildren, useState } from "react"
import { NavLinks } from "../NavLinks/NavLinks"
import styles from "./SideBar.module.scss"

type SideBarProps = {
	classNames?: string
} & PropsWithChildren
export const SideBar: FC<SideBarProps> = props => {
	const { classNames, children } = props

	const [collapsed, setCollapsed] = useState(true)

	const collapsedHandler = (): void => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			data-testid="sidebar-widgets"
			className={classNamesHelp(styles.SideBar, { [styles.collapsed]: collapsed }, [
				classNames
			])}
		>
			<NavLinks collapsed={collapsed} />
			<Button
				data-testid="sidebar-collapsed-btn"
				theme={ButtonTheme.INVERTEDBACKGROUND}
				className={styles.toggleButton}
				onClick={collapsedHandler}
			>
				{collapsed ?
					<ArrowRight />
				:	<ArrowLeft />}
			</Button>
			<div
				className={classNamesHelp(styles.switchers, {
					[styles.switchersColumn]: collapsed
				})}
			>
				{Children.map(children, (child, index) => {
					if (index !== 0) {
						return <div className={styles.switcherMargin}>{child}</div>
					}
					return child
				})}
			</div>
		</div>
	)
}
