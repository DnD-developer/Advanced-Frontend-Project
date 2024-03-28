export type buildMode = "production" | "development"

export type buildPaths = {
	entry: string
	build: string
	html: string
	src: string
}
type aliases = Array<Record<string, string>>
export type buildEnv = {
	mode: buildMode
	port: buildOptions["port"]
}

export type buildOptions = {
	mode: buildMode
	paths: buildPaths
	port: number
	aliases: aliases
	isDev: boolean
}
