import type { buildMode, buildOptionsType } from "../types/config"

export function getApi(mode: buildMode, apiUrl?: buildOptionsType["apiUrl"]) {
	if (apiUrl) {
		return apiUrl
	}

	if (mode === "production") {
		return "/api"
	}

	return "http://localhost:8000"
}
