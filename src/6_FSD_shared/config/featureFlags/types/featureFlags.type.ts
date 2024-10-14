import { type DeepPartial } from "@customTypes/global.types"

export type featureFlagsKeysType = "isFeatureRating" | "isFeatureComments"

export type featureFlagsType = DeepPartial<Record<featureFlagsKeysType, boolean>>
