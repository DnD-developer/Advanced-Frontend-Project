import { type ResolveOptions } from "webpack"
import { type buildOptions } from "./types/config"

export function resolversWebpack({ aliases, paths }: buildOptions): ResolveOptions {
	return {
		alias: aliases,
		mainFiles: ["index"],
		modules: [paths.src, "node_modules"],
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	}
}
