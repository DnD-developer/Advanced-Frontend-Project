import { type RuleSetRule } from "webpack"
import { type buildOptions } from "./types/config"
import { babelLoader } from "./webpackLoaders/babelLoader.webpack"
import { fileLoader } from "./webpackLoaders/fileLoader.webpack"
import { sassLoader } from "./webpackLoaders/sassLoader.webpack"
import { svgrLoaders } from "./webpackLoaders/svgrLoaders.webpack"
import { tsLoader } from "./webpackLoaders/tsLoader.webpack"

export function loadersWebpack(options: buildOptions): RuleSetRule[] {
	return [
		babelLoader(options),
		tsLoader(options),
		sassLoader(options),
		fileLoader(options),
		...svgrLoaders()
	]
}
