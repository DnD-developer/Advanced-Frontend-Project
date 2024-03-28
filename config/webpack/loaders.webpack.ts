import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ReactRefreshTypeScript from "react-refresh-typescript"
import type webpack from "webpack"
import { type buildOptions } from "./types/config"

export function loadersWebpack({ isDev }: buildOptions): webpack.RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: "ts-loader",
				options: {
					getCustomTransformers: {
						before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
					}
				}
			}
		],
		exclude: /node_modules/
	}

	const sassLoader = {
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
	}

	const outPathCallback = (url: string, context: string): string => {
		if (/images?/.test(context)) {
			return `assets/images/${url}`
		}

		if (/icons?/.test(context)) {
			return `assets/icons/${url}`
		}

		if (/fonts?/.test(context)) {
			return `assets/fonts/${url}`
		}

		return `assets/${url}`
	}

	const fileLoader = {
		test: /\.(txt|png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
		use: [
			{
				loader: "file-loader",
				options: {
					outputPath: outPathCallback,
					name: isDev ? "[name][contenthash].[ext]" : "[contenthash].[ext]"
				}
			}
		]
	}

	const svgrLoaderComponent = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		resourceQuery: { not: [/url/] },
		use: [
			{
				loader: "@svgr/webpack",
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: "convertColors",
								params: {
									currentColor: true
								}
							}
						]
					}
				}
			}
		]
	}

	const svgrLoaderIcon = {
		test: /\.svg$/i,
		type: "asset",
		resourceQuery: /url/,
		use: ["@svgr/webpack"]
	}

	return [tsLoader, sassLoader, fileLoader, svgrLoaderComponent, svgrLoaderIcon]
}