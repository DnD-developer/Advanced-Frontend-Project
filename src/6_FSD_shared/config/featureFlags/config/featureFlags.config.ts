import { type featureFlagsType, type featureFlagsKeysType } from "../types/featureFlags.type"

let featureFlagsConfig: featureFlagsType = {}

export function setFeatureFlags(newFeatureFlags: featureFlagsType) {
	if (newFeatureFlags) {
		featureFlagsConfig = newFeatureFlags
	}
}

export function getFeatureFlag(key: featureFlagsKeysType) {
	return featureFlagsConfig[key]
}
