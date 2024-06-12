import { OptionType, Select, SelectProps } from "@ui/Select"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Currency } from "../constants/Currency.constant"

type CurrencySelectCustomProps = {
	onChange?: (value: Currency) => void
	value?: Currency
	options?: never
}

type CurrencySelectProps = CurrencySelectCustomProps &
	Omit<SelectProps, keyof CurrencySelectCustomProps>

const currencyOptions: OptionType[] = Object.entries(Currency).map(([value, content]) => {
	return {
		value: value,
		content: content
	}
})

export const CurrencySelect = memo<CurrencySelectProps>(props => {
	const { classNames, onChange, value, ...otherProps } = props

	const { t } = useTranslation("profile")

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency)
		},
		[onChange]
	)

	return (
		<Select
			options={currencyOptions}
			classNamesLabel={classNames}
			onChange={onChangeHandler}
			label={t("profile:yourCurrency")}
			value={value}
			{...otherProps}
		/>
	)
})
