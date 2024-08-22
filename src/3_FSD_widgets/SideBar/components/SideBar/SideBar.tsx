import ArrowLeft from "@assets/icons/arrow-left.svg"
import ArrowRight from "@assets/icons/arrow-right.svg"
import { SwitchLangButton } from "@features/SwitchLang/components/SwitchLangButton/SwitchLangButton"
import { SwitchThemeButton } from "@features/SwitchTheme"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
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

	const switcherContent = (
		<>
			<SwitchThemeButton />
			<SwitchLangButton />
		</>
	)

	return (
		<aside
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
			{collapsed ?
				<VStack
					className={styles.switchers}
					gap={"gap8"}
					align={"center"}
					justify={"center"}
				>
					{switcherContent}
				</VStack>
			:	<HStack
					className={styles.switchers}
					gap={"gap16"}
					align={"center"}
					justify={"center"}
				>
					{switcherContent}
				</HStack>
			}
		</aside>
	)
})
