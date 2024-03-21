import webpack from "webpack"
import { devServerWebpack } from "./devServer.webpack"
import { loadersWebpack } from "./loaders.webpack"
import { optimizationWebpack } from "./optimization.webpack"
import { pluginsWebpack } from "./plugins.webpack"
import { resolversWebpack } from "./resolvers.webpack"
import { buildOptions } from "./types/config"

export function configWebpack(options: buildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options
	return {
		mode,
		entry: paths.entry,
		devtool: isDev ? "inline-source-map" : undefined,
		optimization: optimizationWebpack(options),
		devServer: isDev ? devServerWebpack(options) : undefined,
		resolve: resolversWebpack(),
		output: {
			path: paths.build,
			filename: "[name].[contenthash].bundle.js",
			clean: true
		},
		plugins: pluginsWebpack(options),
		module: {
			rules: loadersWebpack(options)
		}
	}
}