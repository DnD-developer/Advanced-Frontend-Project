import reactRefreshBabel from "react-refresh/babel"
import { type RuleSetRule } from "webpack"
import { removeAttributePluginBabel } from "../../../plugins/babel/removeAttributePlugin.babel"
import type { buildOptionsType } from "../types/config"

type buildOptionBabelType = buildOptionsType & { isTsx: boolean }

export const babelLoader = ({ isDev, isTsx }: buildOptionBabelType): RuleSetRule => ({
	test: isTsx ? /\.m?[jt]sx?$/ : /\.m?[jt]s?$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env"],
			plugins: [
				isDev && reactRefreshBabel,
				"@babel/plugin-transform-runtime",
				["@babel/plugin-transform-typescript", { isTsx }],
				isTsx && [removeAttributePluginBabel, { props: ["data-testid"] }]
			].filter(Boolean)
		}
	}
})
