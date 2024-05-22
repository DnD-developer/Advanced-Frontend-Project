import { OptionType, Select, SelectProps } from "@ui/Select"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { Country } from "../models/constants/Country.constant"

type CountrySelectCustomProps = {
	onChange?: (value: Country) => void
	value?: Country
	options?: never
}

type CountrySelectProps = CountrySelectCustomProps &
	Omit<SelectProps, keyof CountrySelectCustomProps>

const currencyOptions: OptionType[] = Object.entries(Country).map(([value, content]) => {
	return {
		value: value,
		content: content
	}
})

export const CountrySelect = memo<CountrySelectProps>(props => {
	const { classNames, onChange, value, ...otherProps } = props

	const { t } = useTranslation()

	const onChangeHandler = (value: string) => {
		onChange?.(value as Country)
	}

	return (
		<Select
			options={currencyOptions}
			classNamesLabel={classNames}
			onChange={onChangeHandler}
			label={t("profile:yourCountry")}
			value={value}
			{...otherProps}
		/>
	)
})
