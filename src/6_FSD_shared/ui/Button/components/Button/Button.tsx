import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type ButtonHTMLAttributes, memo, useMemo } from "react"
import { ButtonTheme } from "../../constants/Button.constant"
import styles from "./Button.module.scss"

type ButtonProps = {
	theme?: ButtonTheme
	inverted?: boolean
	disabled?: boolean
	error?: boolean
	hover?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo<ButtonProps>(props => {
	const {
		theme = ButtonTheme.PRIMARY,
		children,
		className,
		disabled = false,
		inverted = false,
		error = false,
		hover = true,
		...otherProps
	} = props

	const mods = useMemo<Mods>(() => {
		return {
			[styles.disabled]: disabled,
			[styles.inverted]: inverted,
			[styles.error]: error,
			[styles.hoverButton]: hover
		}
	}, [disabled, error, hover, inverted])

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
