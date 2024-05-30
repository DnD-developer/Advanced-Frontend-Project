import { Country } from "../../../Country"
import { Currency } from "../../../Currency"

export type profileDataType = {
	age?: number
	avatar?: string
	city?: string
	country?: Country
	currency?: Currency
	firstName?: string
	lastName?: string
	userName?: string
}
