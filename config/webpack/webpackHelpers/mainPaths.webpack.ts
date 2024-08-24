import path from "node:path"
import { type buildOptionsType } from "../types/config"

export const mainPathsWebpack = (dirname: string): buildOptionsType["paths"] => ({
	html: path.resolve(dirname, "public", "index.html"),
	entry: path.resolve(dirname, "src", "index.tsx"),
	build: path.resolve(dirname, "build"),
	src: path.resolve(dirname, "src"),
	locales: path.resolve(dirname, "public", "locales"),
	buildLocales: path.resolve(dirname, "build", "locales")
})
