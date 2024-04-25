import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import TerserPlugin from "terser-webpack-plugin"
import { Configuration } from "webpack"
import { type buildOptions } from "./types/config"

export function optimizationWebpack({ isDev }: buildOptions): Configuration["optimization"] {
	const cssMinimizer = new CssMinimizerPlugin()

	return {
		minimize: !isDev,
		minimizer: [
			cssMinimizer,
			new TerserPlugin({
				extractComments: false
			})
		]
	}
}
