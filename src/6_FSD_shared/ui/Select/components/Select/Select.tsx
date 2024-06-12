import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { ChangeEvent, memo, SelectHTMLAttributes, useCallback, useMemo } from "react"
import { SelectTheme } from "../../constants/Select.constant"
import styles from "./Select.module.scss"

type SelectCustomProps = {
	classNames?: string
	classNamesLabel?: string
	theme?: SelectTheme
	options: OptionType[]
	label?: string
	onChange?: (value: string) => void
}

export type OptionType = {
	value: string
	content: string
}

export type SelectProps = SelectCustomProps &
	Omit<SelectHTMLAttributes<HTMLSelectElement>, keyof SelectCustomProps>

export const Select = memo<SelectProps>(props => {
	const {
		classNames,
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
			onChange?.(target.value)
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
				className={classNamesHelp(styles.Select, mods, [classNames, styles[theme]])}
				disabled={disabled}
				onChange={onChangeHandler}
				value={value}
				{...otherProps}
			>
				{optionList}
			</select>
		)
	}, [classNames, disabled, mods, onChangeHandler, optionList, otherProps, theme, value])

	if (label) {
		return (
			<label className={classNamesHelp(styles.label, mods, [classNamesLabel])}>
				{label}
				{selectComponent}
			</label>
		)
	}

	return selectComponent
})
