import path from "node:path"
import type webpack from "webpack"
import { configWebpack } from "./config/webpack/config.webpack"
import { type buildEnv, type buildOptions } from "./config/webpack/types/config"
import { compilerOptions } from "./tsconfig.paths.json"

type pathTsconfigType = Record<string, string[]>
type pathAliasType = Record<string, string>

const resolveTsconfigPathAlias = (): pathAliasType[] => {
	const { paths } = compilerOptions
	const aliases: pathAliasType[] = []

	Object.entries(paths as pathTsconfigType).forEach(([keyA, pathA]) => {
		const alias = keyA.replace("@", "").replace("/*", "")
		const pathAlias = pathA[0].replace("*", "")

		aliases.push({ [alias]: path.resolve(__dirname, pathAlias) })
	})

	return aliases
}

export default (env: buildEnv): webpack.Configuration => {
	const options: buildOptions = {
		paths: {
			html: path.resolve(__dirname, "public", "index.html"),
			entry: path.resolve(__dirname, "src", "index.tsx"),
			build: path.resolve(__dirname, "build"),
			src: path.resolve(__dirname, "src")
		},
		aliases: resolveTsconfigPathAlias(),
		mode: env.mode,
		isDev: env.mode === "development",
		port: env.port
	}

	return configWebpack(options)
}
