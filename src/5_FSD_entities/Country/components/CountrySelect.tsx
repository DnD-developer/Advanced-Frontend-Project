import { OptionType, Select, SelectProps } from "@ui/Select"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Country } from "../constants/Country.constant"

type CountrySelectCustomProps = {
	onChange?: (value: Country) => void
	value?: Country
	options?: never
}

type CountrySelectProps<T extends string> = CountrySelectCustomProps &
	Omit<SelectProps<T>, keyof CountrySelectCustomProps>

const currencyOptions: OptionType<Country>[] = Object.entries(Country).map(([content, value]) => {
	return {
		value: value,
		content: content
	}
})

const CountrySelectElement = <T extends string>(props: CountrySelectProps<T>) => {
	const { className, onChange, value = Country.Belarus, ...otherProps } = props

	const { t } = useTranslation("profile")

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Country)
		},
		[onChange]
	)

	return (
		<Select
			options={currencyOptions}
			classNamesLabel={className}
			onChange={onChangeHandler}
			label={t("profile:yourCountry")}
			value={value}
			{...otherProps}
		/>
	)
}

export const CountrySelect = memo(CountrySelectElement) as typeof CountrySelectElement
