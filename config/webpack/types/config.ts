export type buildMode = "production" | "development"

export type buildPathsType = {
	entry: string
	build: string
	html: string
	src: string
	locales: string
	buildLocales: string
}

export type buildEnvType = {
	mode: buildMode
	port: buildOptionsType["port"]
	isAnalyze: "true" | "false"
	apiUrl: buildOptionsType["apiUrl"]
}

export type buildOptionsType = {
	mode?: buildMode
	paths: buildPathsType
	port?: number
	aliases: Record<string, string>
	isDev: boolean
	isAnalyze?: boolean
	project?: "frontend" | "storybook" | "jest"
	apiUrl: string
}
