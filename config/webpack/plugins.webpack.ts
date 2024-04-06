import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import ESLintWebpackPlugin from "eslint-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import StylelintWebpackPlugin from "stylelint-webpack-plugin"
import {
	DefinePlugin,
	HotModuleReplacementPlugin,
	ProgressPlugin,
	type WebpackPluginInstance
} from "webpack"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { type buildOptions } from "./types/config"

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
		}),
		new HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin({
			overlay: false
		}),
		new ESLintWebpackPlugin({
			extensions: ["ts", "tsx"]
		}),
		new StylelintWebpackPlugin({
			files: ["src/**/*.scss"],
			fix: true
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false
		})
	]
}
