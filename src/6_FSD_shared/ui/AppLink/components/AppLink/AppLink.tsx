import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import React, { memo, useMemo } from "react"
import { Link, type LinkProps } from "react-router-dom"
import { AppLinkTheme } from "../../constants/AppLink.constant"
import styles from "./AppLink.module.scss"

export type AppLinkProps = {
	theme?: AppLinkTheme
	inverted?: boolean
	hover?: boolean
} & LinkProps

const Component = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
	const {
		className,
		to,
		theme = AppLinkTheme.PRIMARY,
		children,
		inverted = false,
		hover = true,
		target,
		...otherProps
	} = props

	const mods = useMemo<Mods>(() => {
		return {
			[styles.inverted]: inverted,
			[styles.hoverLink]: hover
		}
	}, [hover, inverted])

	return (
		<Link
			ref={ref}
			target={target}
			to={to}
			className={classNamesHelp(styles.AppLink, mods, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})

export const AppLink = memo<AppLinkProps>(Component)
