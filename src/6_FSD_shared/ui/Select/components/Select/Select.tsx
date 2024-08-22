import {
	Listbox as HListBox,
	ListboxButton as HListBoxButton,
	ListboxOption as HListBoxOption,
	ListboxOptions as HListBoxOptions
} from "@headlessui/react"
import { AnchorPropsWithSelection } from "@headlessui/react/dist/internal/floating"
import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { Fragment, memo, useCallback, useMemo } from "react"
import { SelectTheme } from "../../constants/Select.constant"
import styles from "./Select.module.scss"

type SelectCustomProps<T extends string> = {
	className?: string
	classNamesLabel?: string
	theme?: SelectTheme
	options: OptionType<T>[]
	label?: string
	disabled?: boolean
	defaultValue?: T
	value?: T
	onChange?: (value: T) => void
}

export type OptionType<T extends string> = {
	value: T
	content: string
}

export type SelectProps<T extends string> = SelectCustomProps<T>

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
	const {
		className,
		classNamesLabel,
		theme = SelectTheme.OUTLINE,
		options,
		disabled,
		defaultValue,
		value,
		label,
		onChange
	} = props

	const onChangeHandler = useCallback(
		(value: T) => {
			onChange?.(value)
		},
		[onChange]
	)

	const optionList = useMemo(() => {
		return options.map(opt => (
			<HListBoxOption
				as={Fragment}
				key={opt.value}
				value={opt.value}
			>
				{({ focus }) => {
					return (
						<li
							className={classNamesHelp(
								styles.option,
								{
									[styles.focus]: focus
								},
								[styles[theme]]
							)}
						>
							{opt.content}
						</li>
					)
				}}
			</HListBoxOption>
		))
	}, [options, theme])

	const mods: Mods = useMemo(() => {
		return {
			[styles.readonly]: disabled
		}
	}, [disabled])

	const anchor: AnchorPropsWithSelection = useMemo(
		() => ({
			gap: 8,
			to: "bottom"
		}),
		[]
	)

	const triggerContent = options.filter(opt => opt.value == value)[0]?.content || defaultValue

	const hSelectComponent = (
		<HListBox
			className={classNamesHelp(styles.Select, mods, [className, styles[theme]])}
			as="div"
			value={value}
			disabled={disabled}
			onChange={onChangeHandler}
		>
			<HListBoxButton className={styles.trigger}>{triggerContent}</HListBoxButton>
			<HListBoxOptions
				className={styles.list}
				anchor={anchor}
			>
				{optionList}
			</HListBoxOptions>
		</HListBox>
	)

	if (label) {
		return (
			<label className={classNamesHelp(styles.label, mods, [classNamesLabel])}>
				{label}
				{hSelectComponent}
			</label>
		)
	}

	return hSelectComponent
}

export const Select = memo(SelectComponent) as typeof SelectComponent
