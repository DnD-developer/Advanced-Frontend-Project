import type webpack from "webpack"
import { type buildOptions } from "./types/config"

export function resolversWebpack({ aliases, paths }: buildOptions): webpack.ResolveOptions {
	const aliasesObject: (typeof aliases)[0] = {}

	aliases.forEach(alias => {
		const [[key, value]] = Object.entries(alias)

		aliasesObject[`@${key}`] = value
	})

	return {
		alias: aliasesObject,
		mainFiles: ["index"],
		modules: [paths.src, "node_modules"],
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	}
}
