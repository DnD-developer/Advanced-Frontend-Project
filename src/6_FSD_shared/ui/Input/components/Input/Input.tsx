import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import {
	ChangeEvent,
	InputHTMLAttributes,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef
} from "react"
import styles from "./Input.module.scss"

type InputCustomProps = {
	classNames?: string
	theme?: InputTheme
	inverted?: boolean
	value?: string | number
	onChange?: (value: string) => void
	autoFocus?: boolean
	label?: string
	classNamesLabel?: string
	readOnly?: boolean
	type?: string
}

type InputProps = InputCustomProps &
	Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputCustomProps>

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
		inverted = false,
		readOnly = false
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

	const mods = useMemo<Mods>(() => {
		return { [styles.inverted]: inverted, [styles.readOnly]: readOnly }
	}, [inverted, readOnly])

	const inputElement = () => (
		<input
			ref={inputRef}
			type={type}
			readOnly={readOnly}
			className={classNamesHelp(styles.Input, mods, [classNames, styles[theme]])}
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
