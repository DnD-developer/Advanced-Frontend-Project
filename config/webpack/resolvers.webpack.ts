import { type ResolveOptions } from "webpack"
import { type buildOptionsType } from "./types/config"

export function resolversWebpack({ aliases, paths }: buildOptionsType): ResolveOptions {
	return {
		alias: aliases,
		mainFiles: ["index"],
		modules: [paths.src, "node_modules"],
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	}
}
