import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ChangeEvent, InputHTMLAttributes, memo, useCallback, useEffect, useRef } from "react"
import styles from "./Input.module.scss"

type InputProps = {
	classNames?: string
	theme?: InputTheme
	inverted?: boolean
	value?: string
	onChange?: (value: string) => void
	autoFocus?: boolean
	label?: string
	classNamesLabel?: string
	type?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "className" | "type">

export enum InputTheme {
	OUTLINE = "outline"
}

export const Input = memo<InputProps>(props => {
	const {
		classNames,
		theme = InputTheme.OUTLINE,
		value,
		onChange,
		autoFocus = false,
		label = "",
		classNamesLabel,
		type = "text",
		inverted = false
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target

			onChange?.(value)
		},
		[onChange]
	)

	const inputElement = () => (
		<input
			ref={inputRef}
			type={type}
			className={classNamesHelp(styles.Input, { [styles.inverted]: inverted }, [
				classNames,
				styles[theme]
			])}
			value={value}
			onChange={onChangeHandler}
		/>
	)

	if (label) {
		return (
			<label
				className={classNamesHelp(
					styles.label,
					{
						[styles.inverted]: inverted
					},
					[classNamesLabel]
				)}
			>
				{label}
				{inputElement()}
			</label>
		)
	}

	return inputElement()
})
