import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type FC } from "react"
import { Link, type LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"

export type AppLinkProps = {
	theme?: AppLinkTheme
	inverted?: boolean
} & LinkProps

export enum AppLinkTheme {
	PRIMARY = "primary"
}

export const AppLink: FC<AppLinkProps> = props => {
	const {
		className,
		to,
		theme = AppLinkTheme.PRIMARY,
		children,
		inverted = false,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNamesHelp(styles.AppLink, { [styles.inverted]: inverted }, [
				className,
				styles[theme]
			])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
