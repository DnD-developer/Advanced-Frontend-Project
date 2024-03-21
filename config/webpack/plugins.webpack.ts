import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { buildOptions } from "./types/config"

export function pluginsWebpack(options: buildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({ template: options.paths.html }),
		new webpack.ProgressPlugin({ percentBy: null }),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[id].[contenthash:8].css"
		})
	]
}