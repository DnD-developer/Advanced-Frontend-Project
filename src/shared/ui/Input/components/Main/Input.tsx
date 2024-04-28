import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from "react"
import styles from "./Input.module.scss"

type InputProps = {
	classNames?: string
	theme?: InputTheme
	value?: string
	onChange?: (value: string) => void
	autoFocus?: boolean
	label?: string
	classNamesLabel?: string
	type?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "className" | "type">

export enum InputTheme {
	OUTLINE = "outline",
	OUTLINEINVERTED = "outline-inverted"
}

export const Input = memo((props: InputProps) => {
	const {
		classNames,
		theme = InputTheme.OUTLINE,
		value,
		onChange,
		autoFocus,
		label = "",
		classNamesLabel,
		type = "text"
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target

		onChange?.(value)
	}

	const InputElement = () => (
		<input
			ref={inputRef}
			type={type}
			className={classNamesHelp(styles.Input, {}, [classNames, styles[theme]])}
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
						[styles.labelInverted]: theme === InputTheme.OUTLINEINVERTED
					},
					[classNamesLabel]
				)}
			>
				{label}
				<InputElement />
			</label>
		)
	}

	return <InputElement />
})
