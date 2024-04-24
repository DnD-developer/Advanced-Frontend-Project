// noinspection ES6PreferShortImport

import { type Configuration } from "webpack"
import { configWebpack } from "./config/webpack/config.webpack"
import { type buildEnv, type buildOptions } from "./config/webpack/types/config"
import { aliasesFromTsConfig } from "./config/webpack/webpackHelpers/aliasesFromTsConfig.webpack"
import { mainPathsWebpack } from "./config/webpack/webpackHelpers/mainPaths.webpack"
import { compilerOptions } from "./tsconfig.paths.json"

export default (env: buildEnv): Configuration => {
	const options: buildOptions = {
		paths: mainPathsWebpack(__dirname),
		aliases: aliasesFromTsConfig(compilerOptions, __dirname),
		mode: env.mode,
		isDev: env.mode === "development",
		port: env.port
	}

	return configWebpack(options)
}
