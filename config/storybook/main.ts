import type { StorybookConfig } from "@storybook/react-webpack5"
import { webpackStorybookConfig } from "./webpackStorybook.config"

const config: StorybookConfig = {
	stories: ["../../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-themes",
		"storybook-react-i18next"
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {}
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: "automatic"
				}
			}
		}
	}),
	docs: {
		autodocs: "tag"
	},
	webpackFinal: async config => webpackStorybookConfig(config)
}
export default config
