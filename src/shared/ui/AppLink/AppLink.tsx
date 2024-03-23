import { ClassNames } from "@shared/helpers/ClassNames"
import { FC } from "react"
import { Link, LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"

interface AppLinkProps extends LinkProps {
	classNames?: string
	name: string
	theme?: AppLinkTheme
}

export enum AppLinkTheme {
	PRIMARY = "primary",
	INVERTED = "inverted"
}

export const AppLink: FC<AppLinkProps> = props => {
	const { classNames, to, name, theme } = props

	return (
		<Link
			to={to}
			className={ClassNames(styles.AppLink, {}, [classNames, styles[theme]])}>
			{name}
		</Link>
	)
}