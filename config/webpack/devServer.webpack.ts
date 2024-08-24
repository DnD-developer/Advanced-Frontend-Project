import { type Configuration as DevServerConfiguration } from "webpack-dev-server"
import { type buildOptionsType } from "./types/config"

export function devServerWebpack({ port }: buildOptionsType): DevServerConfiguration {
	return {
		port,
		historyApiFallback: true,
		hot: true,
		client: {
			overlay: false
		}
	}
}
