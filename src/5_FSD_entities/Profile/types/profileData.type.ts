import type { Country } from "../../Country"
import type { Currency } from "../../Currency"

export type profileDataType = {
	id: string
	age?: number
	avatar?: string
	city?: string
	country?: Country
	currency?: Currency
	firstName?: string
	lastName?: string
	userName?: string
}

export type profileCardDataType = Omit<profileDataType, "id">
