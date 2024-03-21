import path from "node:path"
import webpack from "webpack"
import { configWebpack } from "./config/webpack/config.webpack"
import { buildEnv, buildOptions } from "./config/webpack/types/config"

export default (env: buildEnv) => {
	const options: buildOptions = {
		paths: {
			html: path.resolve(__dirname, "public", "index.html"),
			entry: path.resolve(__dirname, "src", "index.tsx"),
			build: path.resolve(__dirname, "build")
		},
		mode: env.mode,
		isDev: env.mode === "development",
		port: env.port
	}

	const config: webpack.Configuration = configWebpack(options)

	return config
}