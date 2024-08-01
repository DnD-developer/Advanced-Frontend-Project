import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { ChangeEvent, memo, SelectHTMLAttributes, useCallback, useMemo } from "react"
import { SelectTheme } from "../../constants/Select.constant"
import styles from "./Select.module.scss"

type SelectCustomProps<T extends string> = {
	className?: string
	classNamesLabel?: string
	theme?: SelectTheme
	options: OptionType<T>[]
	label?: string
	onChange?: (value: T) => void
}

export type OptionType<T extends string> = {
	value: T
	content: string
}

export type SelectProps<T extends string> = SelectCustomProps<T> &
	Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof SelectCustomProps<T>>

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
	const {
		className,
		classNamesLabel,
		theme = SelectTheme.OUTLINE,
		options,
		disabled,
		value,
		label,
		onChange,
		...otherProps
	} = props

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			const { target } = event
			onChange?.(target.value as T)
		},
		[onChange]
	)

	const optionList = useMemo(() => {
		return options.map(opt => (
			<option
				key={opt.value}
				value={opt.value}
			>
				{opt.content}
			</option>
		))
	}, [options])

	const mods: Mods = useMemo(() => {
		return {
			[styles.readonly]: disabled
		}
	}, [disabled])

	const selectComponent = useMemo(() => {
		return (
			<select
				className={classNamesHelp(styles.Select, mods, [className, styles[theme]])}
				disabled={disabled}
				onChange={onChangeHandler}
				value={value}
				{...otherProps}
			>
				{optionList}
			</select>
		)
	}, [className, disabled, mods, onChangeHandler, optionList, otherProps, theme, value])

	if (label) {
		return (
			<label className={classNamesHelp(styles.label, mods, [classNamesLabel])}>
				{label}
				{selectComponent}
			</label>
		)
	}

	return selectComponent
}

export const Select = memo(SelectComponent) as typeof SelectComponent
