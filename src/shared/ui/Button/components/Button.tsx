import { ClassNames } from "@lib/helpers/ClassNames"
import { ButtonHTMLAttributes, FC } from "react"
import styles from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme
}

// noinspection JSUnusedGlobalSymbols
export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline"
}
export const Button: FC<ButtonProps> = props => {
	const { theme, children, className, ...otherProps } = props

	return (
		<button
			className={ClassNames(styles.Button, {}, [className, styles[theme]])}
			{...otherProps}>
			{children}
		</button>
	)
}