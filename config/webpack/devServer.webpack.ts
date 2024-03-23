import { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { buildOptions } from "./types/config"

export function devServerWebpack({ port }: buildOptions): DevServerConfiguration {
	return {
		port: port,
		historyApiFallback: true
	}
}