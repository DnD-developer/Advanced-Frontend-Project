import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import CircularPlugin from "circular-dependency-plugin"
import CopyPlugin from "copy-webpack-plugin"
import ESLintWebpackPlugin from "eslint-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import StylelintWebpackPlugin from "stylelint-webpack-plugin"
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from "webpack"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { type buildOptionsType } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function pluginsWebpack({
	paths,
	isDev,
	isAnalyze,
	baseUrl,
	project
}: buildOptionsType): WebpackPluginInstance[] {
	const circularPlugin = new CircularPlugin({
		exclude: /node_modules/,
		failOnError: true
	}) as unknown as WebpackPluginInstance

	const plugins = [
		circularPlugin,
		new HtmlWebpackPlugin({ template: paths.html }),
		new ProgressPlugin({ percentBy: null }),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__IS_ANALYZE__: JSON.stringify(isAnalyze),
			__BASE_URL__: JSON.stringify(baseUrl),
			__PROJECT__: JSON.stringify(project)
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true
				},
				mode: "write-references"
			}
		}),
		new ESLintWebpackPlugin({
			extensions: ["ts", "tsx"]
		}),
		new StylelintWebpackPlugin({
			files: ["src/**/*.scss"],
			fix: true
		}),
		new CopyPlugin({
			patterns: [{ from: paths.locales, to: paths.buildLocales }]
		})
	]

	if (isDev) {
		plugins.push(
			new ReactRefreshWebpackPlugin({
				overlay: false
			})
		)

		plugins.push(
			new CopyPlugin({
				patterns: [{ from: paths.locales, to: paths.buildLocales }]
			})
		)
	}

	if (!isDev) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: "css/[name].[contenthash:8].css",
				chunkFilename: "css/[id].[contenthash:8].css"
			})
		)
	}

	if (isAnalyze) {
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false
			})
		)
	}

	return plugins
}
