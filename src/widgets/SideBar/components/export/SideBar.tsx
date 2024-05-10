import ArrowLeft from "@assets/icons/arrow-left.svg"
import ArrowRight from "@assets/icons/arrow-right.svg"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { type FC, type PropsWithChildren, ReactNode, useState } from "react"
import { NavLinks } from "../NavLinks/NavLinks"
import styles from "./SideBar.module.scss"

type SideBarProps = {
	classNames?: string
	SwitchLang?: ReactNode
	SwitchTheme?: ReactNode
} & PropsWithChildren
export const SideBar: FC<SideBarProps> = props => {
	const { classNames, children, SwitchTheme, SwitchLang } = props

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
				theme={ButtonTheme.BACKGROUND}
				inverted={true}
				className={styles.toggleButton}
				onClick={collapsedHandler}
			>
				{collapsed ?
					<ArrowRight />
				:	<ArrowLeft />}
			</Button>
			{children}
			<div
				className={classNamesHelp(styles.switchers, {
					[styles.switchersColumn]: collapsed
				})}
			>
				{SwitchTheme}
				<div className={styles.switcherMargin}>{SwitchLang}</div>
			</div>
		</div>
	)
}
