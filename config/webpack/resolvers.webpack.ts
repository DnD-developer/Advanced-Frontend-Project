import webpack from "webpack"

export function resolversWebpack(): webpack.ResolveOptions {
	return {
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	}
}