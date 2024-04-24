import ReactRefreshTypeScript from "react-refresh-typescript"
import { type RuleSetRule } from "webpack"
import { type buildOptions } from "../types/config"

export const tsLoader = ({ isDev }: buildOptions): RuleSetRule => ({
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
})
