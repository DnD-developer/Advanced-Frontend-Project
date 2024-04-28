import { compilerOptions } from "@/tsconfig.paths.json"
import { resolversWebpack } from "@_webpack/resolvers.webpack"
import { type buildOptions } from "@_webpack/types/config"
import { aliasesFromTsConfig } from "@_webpack/webpackHelpers/aliasesFromTsConfig.webpack"
import { mainPathsWebpack } from "@_webpack/webpackHelpers/mainPaths.webpack"
import { sassLoader } from "@_webpack/webpackLoaders/sassLoader.webpack"
import { svgrLoaders } from "@_webpack/webpackLoaders/svgrLoaders.webpack"
import path from "node:path"
import { type Configuration, DefinePlugin, type RuleSetRule } from "webpack"

export const webpackStorybookConfig = (config: Configuration): Configuration => {
	const baseUrl = path.resolve(__dirname, "..", "..")

	const options: buildOptions = {
		paths: mainPathsWebpack(baseUrl),
		aliases: aliasesFromTsConfig(compilerOptions, baseUrl),
		isDev: true
	}

	if (config.resolve) {
		config.resolve = {
			...config.resolve,
			...resolversWebpack(options)
		}
	}

	if (config.plugins) {
		config.plugins.push(
			new DefinePlugin({
				__IS_DEV__: JSON.stringify(options.isDev)
			})
		)
	}

	if (config.module) {
		config.module.rules = config.module.rules.map((rule: RuleSetRule): RuleSetRule => {
			if (rule.test && (rule.test as string).toString().includes("svg")) {
				return { ...rule, exclude: /\.svg$/i }
			}

			return rule
		})

		config.module.rules = [...config.module.rules, ...svgrLoaders()]
		config.module.rules = [...config.module.rules, sassLoader(options)]
	}
	return config
}
