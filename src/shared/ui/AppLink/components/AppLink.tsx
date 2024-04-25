import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { type FC } from "react"
import { Link, type LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"

type AppLinkProps = {
	theme?: AppLinkTheme
} & LinkProps

export enum AppLinkTheme {
	PRIMARY = "primary",
	INVERTED = "inverted"
}

export const AppLink: FC<AppLinkProps> = props => {
	const { className, to, theme, children, ...otherProps } = props

	return (
		<Link
			to={to}
			className={classNamesHelp(styles.AppLink, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
