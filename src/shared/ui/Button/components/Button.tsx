import { classNamesHelp } from "@lib/helpers/classNamesHelp"
import { type ButtonHTMLAttributes, type FC } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {
	theme?: ButtonTheme
} & ButtonHTMLAttributes<HTMLButtonElement>

// Noinspection JSUnusedGlobalSymbols
export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline"
}
export const Button: FC<ButtonProps> = props => {
	const { theme, children, className, ...otherProps } = props

	return (
		<button
			className={classNamesHelp(styles.Button, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
