import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import { buildOptions } from "./types/config"

export function optimizationWebpack(option: buildOptions) {
	const cssMinimizer = new CssMinimizerPlugin()

	return {
		minimize: !option.isDev,
		minimizer: [cssMinimizer]
	}
}