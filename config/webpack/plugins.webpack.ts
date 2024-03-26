import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack"
import { buildOptions } from "./types/config"

export function pluginsWebpack({ paths, isDev }: buildOptions): WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({ template: paths.html }),
		new ProgressPlugin({ percentBy: null }),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[id].[contenthash:8].css"
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		})
	]
}