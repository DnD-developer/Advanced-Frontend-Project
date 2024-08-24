import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import TerserPlugin from "terser-webpack-plugin"
import type { Configuration } from "webpack"
import { type buildOptionsType } from "./types/config"

export function optimizationWebpack({ isDev }: buildOptionsType): Configuration["optimization"] {
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
