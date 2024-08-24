import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { type RuleSetRule } from "webpack"
import { type buildOptionsType } from "../types/config"

export const sassLoader = ({ isDev }: buildOptionsType): RuleSetRule => ({
	test: /\.s?[ac]ss$/i,
	use: [
		isDev ? "style-loader" : MiniCssExtractPlugin.loader,
		{
			loader: "css-loader",
			options: {
				modules: {
					auto: /\.module\./,
					localIdentName: isDev ? "[local]__[sha1:hash:hex:10]" : "[hash:base64:8]",
					exportLocalsConvention: "camelCase"
				}
			}
		},
		"sass-loader"
	]
})
