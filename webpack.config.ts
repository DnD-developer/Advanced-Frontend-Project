// noinspection JSUnusedGlobalSymbols

import path from "node:path"
import { configWebpack } from "./config/webpack/config.webpack"
import { buildEnv, buildOptions } from "./config/webpack/types/config"

export default (env: buildEnv) => {
	const options: buildOptions = {
		paths: {
			html: path.resolve(__dirname, "public", "index.html"),
			entry: path.resolve(__dirname, "src", "index.tsx"),
			build: path.resolve(__dirname, "build"),
			src: path.resolve(__dirname, "src")
		},
		alias: {
			src: path.resolve(__dirname, "src"),
			app: path.resolve(__dirname, "src", "app"),
			pages: path.resolve(__dirname, "src", "pages"),
			widgets: path.resolve(__dirname, "src", "widgets"),
			features: path.resolve(__dirname, "src", "features"),
			entities: path.resolve(__dirname, "src", "entities"),
			shared: path.resolve(__dirname, "src", "shared")
		},
		mode: env.mode,
		isDev: env.mode === "development",
		port: env.port
	}

	return configWebpack(options)
}