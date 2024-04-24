import { type RuleSetRule } from "webpack"
import { type buildOptions } from "../types/config"

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

export const fileLoader = ({ isDev }: buildOptions): RuleSetRule => ({
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
})
