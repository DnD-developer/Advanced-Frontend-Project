import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { buildOptions } from "./types/config"

export function loadersWebpack(options: buildOptions): webpack.RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/
	}

	const sassLoader = {
		test: /\.s?[ac]ss$/i,
		use: [
			options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: /\.module\./,
						localIdentName: options.isDev
							? "[local]__[sha1:hash:hex:10]"
							: "[hash:base64:8]",
						exportLocalsConvention: "camelCase"
					}
				}
			},
			"sass-loader"
		]
	}
	return [tsLoader, sassLoader]
}