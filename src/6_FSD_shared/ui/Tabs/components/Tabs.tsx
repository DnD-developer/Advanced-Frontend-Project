import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import { TabThemes } from "../constant/TabThemes.constant"
import styles from "./Tabs.module.scss"

export type TabsItem<T extends string> = {
	value: T
	content: string
}

type TabsProps<T extends string> = {
	className?: string
	theme?: TabThemes
	tabs: TabsItem<T>[]
	value?: T
	onTabClick?: (value: TabsItem<T>) => void
}

const TabsElement = <T extends string>(props: TabsProps<T>) => {
	const { className, theme = TabThemes.OUTLINE, tabs, onTabClick, value } = props

	const onTabClickHandler = (tab: TabsItem<T>) => () => {
		if (tab.value !== value) {
			onTabClick?.(tab)
		}
	}

	return (
		<div className={classNamesHelp(styles.Tabs, {}, [className])}>
			{tabs.map(tab => (
				<button
					className={classNamesHelp(
						styles.btn,
						{
							[styles.active]: tab.value === value
						},
						[styles[theme]]
					)}
					key={tab.value}
					onClick={onTabClickHandler(tab)}
					value={tab.value}
				>
					{tab.content}
				</button>
			))}
		</div>
	)
}

export const Tabs = memo(TabsElement) as typeof TabsElement
