import { type Configuration as DevServerConfiguration } from "webpack-dev-server"
import { type buildOptions } from "./types/config"

export function devServerWebpack({ port }: buildOptions): DevServerConfiguration {
	return {
		port,
		historyApiFallback: true,
		hot: true,
		client: {
			overlay: false
		}
	}
}
