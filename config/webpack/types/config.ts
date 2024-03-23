export type buildMode = "production" | "development"

export interface buildPaths {
	entry: string
	build: string
	html: string,
	src: string
}
export interface aliases {
	src: string
	app: string
	pages: string
	widgets: string
	entities: string
	features: string
	shared: string
}
export interface buildEnv {
	mode: buildMode
	port: buildOptions["port"]
}

export interface buildOptions {
	mode: buildMode
	paths: buildPaths
	port: number
	alias: aliases
	isDev: boolean
}