import reactRefreshBabel from "react-refresh/babel"
import { type RuleSetRule } from "webpack"
import { buildOptions } from "../types/config"

export const babelLoader = ({ isDev }: buildOptions): RuleSetRule => ({
	test: /\.m?[jt]sx?$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env"],
			plugins: [isDev && reactRefreshBabel].filter(Boolean)
		}
	}
})
