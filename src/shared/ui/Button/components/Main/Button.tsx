import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type ButtonHTMLAttributes, type FC } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {
	theme?: ButtonTheme
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum ButtonTheme {
	CLEAR = "clear",
	INVERTEDClEAR = "inverted-clear",
	OUTLINE = "outline",
	INVERTEDOUTLINE = "inverted-outline",
	PRIMARY = "primary",
	INVERTEDPRIMARY = "inverted-primary",
	BACKGROUND = "background",
	INVERTEDBACKGROUND = "inverted-background"
}
export const Button: FC<ButtonProps> = props => {
	const { theme, children, className, ...otherProps } = props

	return (
		<button
			data-testid="button-ui"
			className={classNamesHelp(styles.Button, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
