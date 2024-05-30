import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ChangeEvent, memo, SelectHTMLAttributes, useCallback, useMemo } from "react"
import styles from "./Select.module.scss"
import { SelectTheme } from "./Select.type"

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

	const selectComponent = useMemo(() => {
		return (
			<select
				className={classNamesHelp(styles.Select, {}, [classNames, styles[theme]])}
				disabled={disabled}
				onChange={onChangeHandler}
				value={value}
				{...otherProps}
			>
				{optionList}
			</select>
		)
	}, [classNames, disabled, onChangeHandler, optionList, otherProps, theme, value])

	if (label) {
		return (
			<label className={classNamesHelp(styles.label, {}, [classNamesLabel])}>
				{label}
				{selectComponent}
			</label>
		)
	}

	return selectComponent
})
