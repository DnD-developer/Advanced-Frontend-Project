import ArrowLeft from "@assets/icons/arrow-left.svg"
import ArrowRight from "@assets/icons/arrow-right.svg"
import { SwitchLangButton } from "@features/SwitchLang/components/SwitchLangButton/SwitchLangButton"
import { SwitchThemeButton } from "@features/SwitchTheme"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, type PropsWithChildren, useCallback, useState } from "react"
import { NavLinks } from "../NavLinks/NavLinks"
import styles from "./SideBar.module.scss"

type SideBarProps = {
	classNames?: string
} & PropsWithChildren
export const SideBar = memo<SideBarProps>(props => {
	const { classNames, children } = props

	const [collapsed, setCollapsed] = useState(true)

	const collapsedHandler = useCallback(() => {
		setCollapsed(prev => !prev)
	}, [])

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
				hover={false}
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
				<SwitchThemeButton />
				<div className={styles.switcherMargin}>
					<SwitchLangButton />
				</div>
			</div>
		</div>
	)
})
