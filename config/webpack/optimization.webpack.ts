import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import { type buildOptions } from "./types/config"

export function optimizationWebpack({ isDev }: buildOptions): any {
	const cssMinimizer = new CssMinimizerPlugin()

	return {
		minimize: !isDev,
		minimizer: [cssMinimizer]
	}
}