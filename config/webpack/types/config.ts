export type buildMode = "production" | "development"

export interface buildPaths {
	entry: string
	build: string
	html: string
}

export interface buildEnv {
	mode: buildMode
	port: buildOptions["port"]
}

export interface buildOptions {
	mode: buildMode
	paths: buildPaths
	port: number
	isDev: boolean
}