import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"
import { memo } from "react"
import styles from "./Flex.module.scss"

type justifyType = "spaceBetween" | "spaceAround" | "flexEnd" | "flexStart" | "center"
type alignType = "center" | "flexEnd" | "flexStart"
type directionType = "column" | "row"
type gapType = "gap8" | "gap12" | "gap16" | "gap24" | "gap32"

export type FlexProps = {
	className?: string
	justify?: justifyType
	align?: alignType
	direction?: directionType
	gap?: gapType
	widthMax?: boolean
} & PropsWithChildren &
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const justifyMap: Record<justifyType, string> = {
	spaceBetween: styles.justifySpaceBetween,
	center: styles.justifyCenter,
	spaceAround: styles.justifySpaceAround,
	flexEnd: styles.justifyFlexEnd,
	flexStart: styles.justifyFlexStart
}

const alignMap: Record<alignType, string> = {
	center: styles.alignCenter,
	flexStart: styles.alignFlexStart,
	flexEnd: styles.alignFlexEnd
}

const directionMap: Record<directionType, string> = {
	row: styles.directionRow,
	column: styles.directionColumn
}

const gapMap: Record<gapType, string> = {
	gap8: styles.gap8,
	gap16: styles.gap16,
	gap32: styles.gap32,
	gap12: styles.gap12,
	gap24: styles.gap24
}

export const Flex = memo<FlexProps>(props => {
	const {
		className,
		justify = "flexStart",
		direction = "row",
		widthMax = true,
		align = "flexStart",
		gap,
		children
	} = props

	const mods: Mods = {
		[styles.widthMax]: widthMax
	}

	const classNames = [
		className,
		justifyMap[justify],
		alignMap[align],
		directionMap[direction],
		gap ? gapMap[gap] : undefined
	]

	return <div className={classNamesHelp(styles.Flex, mods, classNames)}>{children}</div>
})
