import { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { buildOptions } from "./types/config"

export function devServerWebpack(options: buildOptions): DevServerConfiguration {
	return {
		port: options.port,
		historyApiFallback: true
	}
}