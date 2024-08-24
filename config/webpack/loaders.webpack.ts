import { type RuleSetRule } from "webpack"
import { type buildOptionsType } from "./types/config"
import { babelLoader } from "./webpackLoaders/babelLoader.webpack"
import { fileLoader } from "./webpackLoaders/fileLoader.webpack"
import { sassLoader } from "./webpackLoaders/sassLoader.webpack"
import { svgrLoaders } from "./webpackLoaders/svgrLoaders.webpack"

export function loadersWebpack(options: buildOptionsType): RuleSetRule[] {
	const babelLoaderRuntime = () => babelLoader({ ...options, isTsx: false })
	const babelLoaderTsx = () => babelLoader({ ...options, isTsx: true })

	return [
		babelLoaderRuntime(),
		babelLoaderTsx(),
		sassLoader(options),
		fileLoader(options),
		...svgrLoaders()
	]
}
