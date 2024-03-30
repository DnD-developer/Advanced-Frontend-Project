// Noinspection JSUnusedGlobalSymbols

import path from "node:path"
import type webpack from "webpack"
import { configWebpack } from "./config/webpack/config.webpack"
import { type buildEnv, type buildOptions } from "./config/webpack/types/config"

export default (env: buildEnv): webpack.Configuration => {
	const options: buildOptions = {
		paths: {
			html: path.resolve(__dirname, "public", "index.html"),
			entry: path.resolve(__dirname, "src", "index.tsx"),
			build: path.resolve(__dirname, "build"),
			src: path.resolve(__dirname, "src")
		},
		aliases: [
			{ src: path.resolve(__dirname, "src") },
			{ app: path.resolve(__dirname, "src", "app") },
			{ widgets: path.resolve(__dirname, "src", "widgets") },
			{ features: path.resolve(__dirname, "src", "features") },
			{ pages: path.resolve(__dirname, "src", "pages") },
			{ entities: path.resolve(__dirname, "src", "entities") },
			{ ui: path.resolve(__dirname, "src", "shared", "ui") },
			{ assets: path.resolve(__dirname, "src", "shared", "assets") },
			{ lib: path.resolve(__dirname, "src", "shared", "lib") },
			{ config: path.resolve(__dirname, "src", "shared", "config") },
			{ public: path.resolve(__dirname, "public") }
		],
		mode: env.mode,
		isDev: env.mode === "development",
		port: env.port
	}

	return configWebpack(options)
}
