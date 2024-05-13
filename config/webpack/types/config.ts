export type buildMode = "production" | "development"

export type buildPaths = {
	entry: string
	build: string
	html: string
	src: string
}

export type buildEnv = {
	mode: buildMode
	port: buildOptions["port"]
	isAnalyze: "true" | "false"
	baseUrl: buildOptions["baseUrl"]
}

export type buildOptions = {
	mode?: buildMode
	paths: buildPaths
	port?: number
	aliases: Record<string, string>
	isDev: boolean
	isAnalyze?: boolean
	baseUrl: string
}
