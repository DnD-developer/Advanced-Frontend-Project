import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import { buildOptions } from "./types/config"

export function optimizationWebpack({isDev}: buildOptions) {
	const cssMinimizer = new CssMinimizerPlugin()

	return {
		minimize: !isDev,
		minimizer: [cssMinimizer]
	}
}