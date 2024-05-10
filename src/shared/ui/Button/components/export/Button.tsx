import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type ButtonHTMLAttributes, type FC } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {
	theme?: ButtonTheme
	inverted?: boolean
	disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
	PRIMARY = "primary",
	BACKGROUND = "background"
}
export const Button: FC<ButtonProps> = props => {
	const {
		theme = ButtonTheme.PRIMARY,
		children,
		className,
		disabled = false,
		inverted = false,
		...otherProps
	} = props

	return (
		<button
			data-testid="button-ui"
			className={classNamesHelp(
				styles.Button,
				{ [styles.disabled]: disabled, [styles.inverted]: inverted },
				[className, styles[theme]]
			)}
			{...otherProps}
		>
			{children}
		</button>
	)
}
