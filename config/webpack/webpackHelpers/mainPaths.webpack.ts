import path from "node:path"
import { type buildOptions } from "../types/config"

export const mainPathsWebpack = (dirname: string): buildOptions["paths"] => ({
	html: path.resolve(dirname, "public", "index.html"),
	entry: path.resolve(dirname, "src", "index.tsx"),
	build: path.resolve(dirname, "build"),
	src: path.resolve(dirname, "src")
})
