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
import { VStack } from "../../../Stack"
import { InputTheme } from "../../constants/Input.constant"
import styles from "./Input.module.scss"

type InputCustomProps<T extends number | string> = {
	className?: string
	theme?: InputTheme
	inverted?: boolean
	error?: boolean
	value?: T
	onChange?: (value: T) => void
	autoFocus?: boolean
	label?: string
	classNamesLabel?: string
	readOnly?: boolean
	type?: string
}

type InputProps<T extends number | string> = InputCustomProps<T> &
	Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputCustomProps<T>>

const InputElement = <T extends string | number>(props: InputProps<T>) => {
	const {
		className,
		theme = InputTheme.OUTLINE,
		value,
		error,
		onChange,
		autoFocus = false,
		label = "",
		classNamesLabel,
		type = "text",
		inverted = false,
		readOnly = false,
		...otherProps
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

			onChange?.(value as T)
		},
		[onChange]
	)

	const mods = useMemo<Mods>(() => {
		return { [styles.inverted]: inverted, [styles.readOnly]: readOnly, [styles.error]: error }
	}, [error, inverted, readOnly])

	const inputElement = () => (
		<input
			ref={inputRef}
			type={type}
			readOnly={readOnly}
			className={classNamesHelp(styles.Input, mods, [className, styles[theme]])}
			value={value}
			onChange={onChangeHandler}
			{...otherProps}
		/>
	)

	if (label) {
		return (
			<label className={classNamesHelp(styles.label, mods, [classNamesLabel])}>
				<VStack gap={"gap8"}>
					{label}
					{inputElement()}
				</VStack>
			</label>
		)
	}

	return inputElement()
}

export const Input = memo(InputElement) as typeof InputElement
