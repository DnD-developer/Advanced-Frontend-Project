import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { type ButtonHTMLAttributes, memo, useMemo } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {
	theme?: ButtonTheme
	inverted?: boolean
	disabled?: boolean
	error?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
	PRIMARY = "primary",
	BACKGROUND = "background"
}
export const Button = memo<ButtonProps>(props => {
	const {
		theme = ButtonTheme.PRIMARY,
		children,
		className,
		disabled = false,
		inverted = false,
		error = false,
		...otherProps
	} = props

	const mods = useMemo<Mods>(() => {
		return {
			[styles.disabled]: disabled,
			[styles.inverted]: inverted,
			[styles.error]: error
		}
	}, [disabled, error, inverted])

	return (
		<button
			data-testid="button-ui"
			className={classNamesHelp(styles.Button, mods, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
})
