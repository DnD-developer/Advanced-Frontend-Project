import { type RuleSetRule } from "webpack"

export const svgrLoaders = (): RuleSetRule[] => {
	const svgrLoaderComponent = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		resourceQuery: { not: [/url/] },
		use: [
			{
				loader: "@svgr/webpack",
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: "convertColors",
								params: {
									currentColor: true
								}
							}
						]
					}
				}
			}
		]
	}

	const svgrLoaderIcon = {
		test: /\.svg$/i,
		type: "asset",
		resourceQuery: /url/,
		use: ["@svgr/webpack"]
	}

	return [svgrLoaderComponent, svgrLoaderIcon]
}
