import { OptionalRecord } from "@customTypes/global.types"

export type scrollType = OptionalRecord<string, number>

export type scrollPositionState = {
	scroll: scrollType
}
