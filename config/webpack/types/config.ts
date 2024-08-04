export type buildMode = "production" | "development"

export type buildPaths = {
	entry: string
	build: string
	html: string
	src: string
	locales: string
	buildLocales: string
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
	project?: "frontend" | "storybook" | "jest"
	baseUrl: string
}
