import { type RuleSetRule } from "webpack"

export const babelLoader = (): RuleSetRule => ({
	test: /\.m?[jt]sx?$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env"]
		}
	}
})
