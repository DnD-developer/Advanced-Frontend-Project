export type buildMode = "production" | "development"

export interface buildPaths {
	entry: string
	build: string
	html: string
	src: string
}
type aliases = Record<string, string>[]
export interface buildEnv {
	mode: buildMode
	port: buildOptions["port"]
}

export interface buildOptions {
	mode: buildMode
	paths: buildPaths
	port: number
	aliases: aliases
	isDev: boolean
}