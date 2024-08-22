import { OptionType, Select, SelectProps } from "@ui/Select"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Currency } from "../constants/Currency.constant"

type CurrencySelectCustomProps = {
	onChange?: (value: Currency) => void
	value?: Currency
	options?: never
}

type CurrencySelectProps<T extends string> = CurrencySelectCustomProps &
	Omit<SelectProps<T>, keyof CurrencySelectCustomProps>

const currencyOptions: OptionType<Currency>[] = Object.entries(Currency).map(([content, value]) => {
	return {
		value: value,
		content: content
	}
})

const CurrencySelectElement = <T extends string>(props: CurrencySelectProps<T>) => {
	const { className, onChange, value = Currency.EUR, ...otherProps } = props

	const { t } = useTranslation("profile")

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency)
		},
		[onChange]
	)

	return (
		<Select
			data-testid={"currencySelect-entity"}
			options={currencyOptions}
			classNamesLabel={className}
			onChange={onChangeHandler}
			label={t("profile:yourCurrency")}
			value={value}
			{...otherProps}
		/>
	)
}

export const CurrencySelect = memo(CurrencySelectElement) as typeof CurrencySelectElement
