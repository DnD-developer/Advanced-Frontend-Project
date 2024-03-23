import webpack from "webpack"
import { buildOptions } from "./types/config"

export function resolversWebpack({ alias, paths }: buildOptions): webpack.ResolveOptions {
	return {
		alias: {
			"@": alias.src,
			"@app": alias.app,
			"@pages": alias.pages,
			"@widgets": alias.widgets,
			"@features": alias.features,
			"@entities": alias.entities,
			"@shared": alias.shared
		},
		mainFiles: ['index'],
		modules: [paths.src, "node_modules"],
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	}
}