// noinspection ES6PreferShortImport

import { type Configuration } from "webpack"
import { configWebpack } from "./config/webpack/config.webpack"
import { type buildEnvType, type buildOptionsType } from "./config/webpack/types/config"
import { aliasesFromTsConfig } from "./config/webpack/webpackHelpers/aliasesFromTsConfig.webpack"
import { mainPathsWebpack } from "./config/webpack/webpackHelpers/mainPaths.webpack"
import { compilerOptions } from "./tsconfig.paths.json"
import { getApi } from "./config/webpack/webpackHelpers/getApi.webpack"

export default (env: buildEnvType): Configuration => {
	const options: buildOptionsType = {
		paths: mainPathsWebpack(__dirname),
		aliases: aliasesFromTsConfig(compilerOptions, __dirname),
		mode: env.mode,
		isDev: env.mode === "development",
		isAnalyze: env.isAnalyze === "true",
		port: env.port,
		project: "frontend",
		apiUrl: getApi(env.mode, env.apiUrl)
	}

	return configWebpack(options)
}
